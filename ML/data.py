import numpy as np
import pandas as pd

# Set seed for reproducibility
np.random.seed(202)

n_samples = 2000

# Generate synthetic features
income = np.random.normal(loc=70000, scale=25000, size=n_samples).clip(15000, 200000)
dependents = np.random.poisson(lam=1.5, size=n_samples).clip(0, 6)
credit_util_ratio = np.random.beta(a=2, b=3, size=n_samples)  # skewed to lower
missed_payments = np.random.poisson(lam=0.7, size=n_samples).clip(0, 15)
credit_accounts = np.random.poisson(lam=7, size=n_samples).clip(1, 25)
dti_ratio = np.random.beta(a=2, b=4, size=n_samples)
credit_history_length = np.random.normal(loc=12, scale=5, size=n_samples).clip(0, 35)
bankruptcies = np.random.choice([0, 1, 2], size=n_samples, p=[0.9, 0.08, 0.02])

# Calculate Credit Score
credit_score = (
    300  # BASE SCORE stays 300
    + (income / 1500)             # stronger positive influence from income
    + (credit_history_length * 30) # longer history = much better
    - (credit_util_ratio * 250)   # high utilization ratio is very bad
    - (missed_payments * 80)      # missed payments seriously bad
    + (credit_accounts * 15)     # more accounts = slightly better
    - (dti_ratio * 150)           # debt burden bad
    - (bankruptcies * 80)        # bankruptcies very bad
    - (dependents * 3)            # more dependents slightly bad
)

# Clamp the score between 300 and 850
credit_score = np.clip(credit_score, 300, 850)

# Assemble into a DataFrame
credit_data = pd.DataFrame({
    "Income": income,
    "Number_of_Dependents": dependents,
    "Credit_Utilization_Ratio": credit_util_ratio,
    "Missed_Payments_90days": missed_payments,
    "Total_Credit_Accounts": credit_accounts,
    "Debt_to_Income_Ratio": dti_ratio,
    "Length_of_Credit_History": credit_history_length,
    "Bankruptcies": bankruptcies,
    "Credit_Score": credit_score
})

# Save it
credit_data.to_csv("synthetic_credit_scores.csv", index=False)

print("✅ Dataset generated and saved as 'synthetic_credit_scores.csv'")
