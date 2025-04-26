from flask import Flask, request, jsonify
import joblib
import pymongo
from flask_cors import CORS
import pandas as pd
from datetime import datetime
from dotenv import load_dotenv
import os

app = Flask(__name__)
CORS(app)

load_dotenv()

# Load model and preprocessor
preprocessor = joblib.load("model/preprocessor.pkl")
model = joblib.load("model/stacked_model.pkl")

# Connect to MongoDB
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["credit_app"]
collection = db["predictions"]

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    print("Received data:", data)

    try:
        # Extract and format features
        features = {
            'Age': float(data['age']),
            'Marital_Status': data['marital_status'],
            'Employment_Status': data['profession'],
            'Education_Level': data['education'],
            'Income': float(data['income']),
            'Number_of_Dependents': int(data['dependents']),
            'Credit_Utilization_Ratio': float(data['credit_util']),
            'Missed_Payments_90days': int(data['missed_payments']),
            'Total_Credit_Accounts': int(data['total_accounts']),
            'Debt_to_Income_Ratio': float(data['dti']),
            'Length_of_Credit_History': float(data['credit_history']),
            'Bankruptcies': int(data['bankruptcies'])
        }

        # Sanity check for all-zero or dummy inputs
        if all([
            features['Income'] == 0,
            features['Number_of_Dependents'] == 0,
            features['Credit_Utilization_Ratio'] == 0,
            features['Missed_Payments_90days'] == 0,
            features['Total_Credit_Accounts'] == 0,
            features['Debt_to_Income_Ratio'] == 0,
            features['Length_of_Credit_History'] == 0,
            features['Bankruptcies'] == 0,
        ]):
            return jsonify({"error": "Invalid input: all-zero or empty/dummy input detected."}), 400

        # Convert to DataFrame and preprocess
        df = pd.DataFrame([features])
        X = preprocessor.transform(df)
        score = int(model.predict(X)[0])

        # Determine credit rating
        if score < 300 or score > 850:
            return jsonify({"error": "The data provided does not enact real-world scenarios."}), 400
        elif score >= 800:
            rating = "Exceptional"
        elif score >= 740:
            rating = "Very Good"
        elif score >= 670:
            rating = "Good"
        elif score >= 580:
            rating = "Fair"
        else:
            rating = "Poor"

        # Send response
        response = {"score": score, "rating": rating}
        print("Sent response:", response)
        return jsonify(response)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    print(os.getenv("flask_server"))
    app.run(host=os.getenv("flask_server"), port=os.getenv("flask_port"))
