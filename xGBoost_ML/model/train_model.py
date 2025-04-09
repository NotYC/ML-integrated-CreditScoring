import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import StackingRegressor
from xgboost import XGBRegressor
from joblib import dump

# Load data
df = pd.read_csv('C:\\Users\\Augni\\Desktop\\NIIT\\Academics\\SEM VI\\Capstone\\ML-integrated-CreditScoring\\xGBoost_ML\\data\\synthetic_credit_data.csv')

# Target
y = df['Credit_Score']

# Feature selection
features = [
    'Age', 'Income', 'Employment_Status', 'Education_Level', 'Marital_Status',
    'Number_of_Dependents', 'Credit_Utilization_Ratio', 'Missed_Payments_90days',
    'Total_Credit_Accounts', 'Debt_to_Income_Ratio', 'Length_of_Credit_History',
    'Bankruptcies'
]
X = df[features]

# Categorical and numeric columns
categorical = ['Employment_Status', 'Education_Level', 'Marital_Status']
numeric = list(set(features) - set(categorical))

# Preprocessing pipeline
preprocessor = ColumnTransformer([
    ('num', StandardScaler(), numeric),
    ('cat', OneHotEncoder(handle_unknown='ignore'), categorical)
])

# Apply preprocessing
X_processed = preprocessor.fit_transform(X)

# Dynamic weights based on missed payments & bankruptcies
weights = 1 + 0.5 * df['Missed_Payments_90days'] + df['Bankruptcies']

# Models
base_models = [
    ('lr', LinearRegression()),
    ('xgb', XGBRegressor(objective='reg:squarederror', n_estimators=100, learning_rate=0.1))
]

stacked_model = StackingRegressor(estimators=base_models, final_estimator=LinearRegression())
stacked_model.fit(X_processed, y, sample_weight=weights)

# Save
dump(preprocessor, 'model/preprocessor.pkl')
dump(stacked_model, 'model/stacked_model.pkl')
