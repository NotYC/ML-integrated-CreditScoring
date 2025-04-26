import pandas as pd
import numpy as np
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.compose import ColumnTransformer
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.linear_model import Ridge
from sklearn.ensemble import StackingRegressor
import joblib
import os
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score

# Create model directory
os.makedirs("model", exist_ok=True)

# Load dataset
df = pd.read_csv("F:\\CAPSTONE\\ML-integrated-CreditScoring\\ML\\synthetic_credit_scores.csv")

# Define features
numerical_features = [
    'Income',
    'Number_of_Dependents',
    'Credit_Utilization_Ratio',
    'Missed_Payments_90days',
    'Total_Credit_Accounts',
    'Debt_to_Income_Ratio',
    'Length_of_Credit_History',
    'Bankruptcies'
]

# Custom function for calculating the credit score
def calculate_credit_score(row):
    return (
        300  # BASE SCORE stays 300
        + (row['Income'] / 1500)             # stronger positive influence from income
        + (row['Length_of_Credit_History'] * 30)  # longer history = much better
        - (row['Credit_Utilization_Ratio'] * 250)  # high utilization ratio is very bad
        - (row['Missed_Payments_90days'] * 80)     # missed payments seriously bad
        + (row['Total_Credit_Accounts'] * 15)      # more accounts = slightly better
        - (row['Debt_to_Income_Ratio'] * 150)      # debt burden bad
        - (row['Bankruptcies'] * 100)               # bankruptcies very bad
        - (row['Number_of_Dependents'] * 3)        # more dependents slightly bad
    )

# Apply the function to create the 'Credit_Score' target
df['Credit_Score'] = df.apply(calculate_credit_score, axis=1)

# Define the target variable and features
X = df[numerical_features]
y = df['Credit_Score']

# Train-test split for validation
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Preprocessor (only StandardScaler because only numerical features)
preprocessor = ColumnTransformer([('num', StandardScaler(), numerical_features)])

# Base learners
base_models = [
    ('gb', GradientBoostingRegressor(random_state=42)),
    ('ridge', Ridge())
]

# Stacking Regressor
stacked_model = StackingRegressor(
    estimators=base_models,
    final_estimator=Ridge(),
    passthrough=True
)

# Pipeline
pipeline = Pipeline([
    ('preprocessor', preprocessor),
    ('model', stacked_model)
])

# Train the model
pipeline.fit(X_train, y_train)

# Evaluate the model
y_pred = pipeline.predict(X_test)
r2 = r2_score(y_test, y_pred)
print(f"R² score on test data: {r2:.4f}")

# Save preprocessor and model separately
joblib.dump(preprocessor, "../PipeLineBlueprint/modelside/model/preprocessor.pkl")
joblib.dump(pipeline.named_steps['model'], "../PipeLineBlueprint/modelside/model/stacked_model.pkl")

print("✅ Model and preprocessor saved to /model")