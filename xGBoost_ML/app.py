from flask import Flask, render_template, request
from pymongo import MongoClient
from datetime import datetime
import numpy as np
import joblib
import pandas as pd

app = Flask(__name__)

# Load model and preprocessor
#model = joblib.load('model/stacked_model.pkl')
#preprocessor = joblib.load('model/preprocessor.pkl')
model = joblib.load('model/polynomial_xgb_stacked_model.pkl')
preprocessor = joblib.load('model/polynomial_preprocessor.pkl')
# MongoDB setup
client = MongoClient("mongodb://localhost:27017/")
db = client["credit_score_db"]
collection = db["submissions"]

@app.route('/', methods=['GET', 'POST'])
def index():
    score = None
    rating = None
    message = ""

    if request.method == 'POST':
        try:
            data = {
                'Age': float(request.form['age']),
                'Marital_Status': request.form['marital_status'],
                'Employment_Status': request.form['profession'],
                'Education_Level': request.form['education'],
                'Income': float(request.form['income']),
                'Number_of_Dependents': int(request.form['dependents']),
                'Credit_Utilization_Ratio': float(request.form['credit_util']),
                'Missed_Payments_90days': int(request.form['missed_payments']),
                'Total_Credit_Accounts': int(request.form['total_accounts']),
                'Debt_to_Income_Ratio': float(request.form['dti']),
                'Length_of_Credit_History': float(request.form['credit_history']),
                'Bankruptcies': int(request.form['bankruptcies'])
            }

            df = pd.DataFrame([data])  # Use DataFrame for compatibility
            input_data = preprocessor.transform(df)
            score = int(model.predict(input_data)[0])

            # Score categories
            if score < 300 or score > 850:
                message = "The data provided does not enact real-world scenarios."
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

            # Save to DB
            data.update({
                'Predicted_Credit_Score': score,
                'Rating': rating,
                'Timestamp': datetime.now()
            })
            collection.insert_one(data)

        except Exception as e:
            message = f"Error: {str(e)}"

    return render_template("index.html", score=score, rating=rating, message=message)

if __name__ == '__main__':
    app.run(debug=True)
