from flask import Flask, request, jsonify
import joblib
import pymongo
from flask_cors import CORS
import pandas as pd
from datetime import datetime  # Optional: to store timestamp

app = Flask(__name__)
CORS(app)  # Enable CORS so Express or any frontend can access it

# Load model and preprocessor
preprocessor = joblib.load("model/preprocessor1.pkl")
model = joblib.load("model/stacked_model1.pkl")

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

        # Convert to DataFrame and preprocess
        df = pd.DataFrame([features])
        X = preprocessor.transform(df)
        score = int(model.predict(X)[0])

        # Determine credit rating
        if score < 300 or score > 850:
            message = "The data provided does not enact real-world scenarios."
            return jsonify({"error": message}), 400
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

        # # Save to MongoDB
        # document = {
        #     "input": features,
        #     "score": score,
        #     "rating": rating,
        #     "timestamp": datetime.utcnow()  # Optional
        # }
        # collection.insert_one(document)

        # Send response
        response = {"score": score, "rating": rating}
        print("Sent response:", response)
        return jsonify(response)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001)
