import pandas as pd
import numpy as np
import pickle
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split

# Load sample data (You need actual financial dataset)
data = pd.read_csv("ml_model/credit_data.csv")


# Features and target variable
X = data.drop(columns=["credit_score"])
y = data["credit_score"]

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Save the trained model
with open("credit_model.pkl", "wb") as file:
    pickle.dump(model, file)
