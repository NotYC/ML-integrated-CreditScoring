import pandas as pd
import numpy as np
import os
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder, StandardScaler, PolynomialFeatures
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.linear_model import Ridge
from sklearn.ensemble import StackingRegressor
from xgboost import XGBRegressor
from joblib import dump

# ========================
# LOAD DATA
# ========================
df = pd.read_csv('C:\\Users\\Augni\\Desktop\\NIIT\\Academics\\SEM VI\\Capstone\\ML-integrated-CreditScoring\\xGBoost_ML\\data\\synthetic_credit_data.csv')

# ========================
# TARGET VARIABLE
# ========================
y = df['Credit_Score']

# ========================
# FEATURES
# ========================
features = [
    'Age', 'Income', 'Employment_Status', 'Education_Level', 'Marital_Status',
    'Number_of_Dependents', 'Credit_Utilization_Ratio', 'Missed_Payments_90days',
    'Total_Credit_Accounts', 'Debt_to_Income_Ratio', 'Length_of_Credit_History',
    'Bankruptcies'
]

X = df[features].copy()  # Explicit copy to avoid SettingWithCopyWarning

# ========================
# CUSTOM FEATURE WEIGHTING (Safe assignment to avoid FutureWarning)
# ========================
feature_weights = {
    'Number_of_Dependents': 0.8,
    'Credit_Utilization_Ratio': 1.5,
    'Missed_Payments_90days': 2.0,
    'Total_Credit_Accounts': 1.0,
    'Debt_to_Income_Ratio': 1.4,
    'Length_of_Credit_History': 1.2,
    'Bankruptcies': 2.5
}

for feature, weight in feature_weights.items():
    if feature in X.columns:
        weighted_values = X[feature].values * weight
        X[feature] = weighted_values.astype(X[feature].dtype)

# ========================
# FEATURE TYPES
# ========================
categorical = ['Employment_Status', 'Education_Level', 'Marital_Status']
numeric = list(set(features) - set(categorical))

# ========================
# PREPROCESSING PIPELINE
# ========================
numeric_pipeline = Pipeline([
    ('poly', PolynomialFeatures(degree=2, include_bias=False)),
    ('scaler', StandardScaler())
])

preprocessor = ColumnTransformer([
    ('num', numeric_pipeline, numeric),
    ('cat', OneHotEncoder(handle_unknown='ignore'), categorical)
])

# ========================
# TRANSFORM FEATURES
# ========================
X_processed = preprocessor.fit_transform(X)

# ========================
# DYNAMIC SAMPLE WEIGHTS
# ========================
weights = 1 + 0.5 * df['Missed_Payments_90days'] + df['Bankruptcies']

# ========================
# BASE MODELS FOR STACKING
# ========================
base_models = [
    ('poly_ridge', Ridge(alpha=1.0)),
    ('xgb', XGBRegressor(objective='reg:squarederror', n_estimators=150, learning_rate=0.08))
]

stacked_model = StackingRegressor(
    estimators=base_models,
    final_estimator=Ridge()
)

# ========================
# FIT MODEL
# ========================
stacked_model.fit(X_processed, y, sample_weight=weights)

# ========================
# SAVE MODEL & PREPROCESSOR
# ========================
os.makedirs('model', exist_ok=True)
dump(preprocessor, 'model/polynomial_preprocessor.pkl')
dump(stacked_model, 'model/polynomial_xgb_stacked_model.pkl')

print("✅ Model training complete and files saved successfully.")
