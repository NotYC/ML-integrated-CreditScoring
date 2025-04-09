from flask import Flask, render_template, request
import pandas as pd
from joblib import load
from pymongo import MongoClient

app = Flask(__name__)

# Load model and preprocessor
preprocessor = load('model/preprocessor.pkl')
model = load('model/stacked_model.pkl')

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")
db = client['credit_app']
collection = db['credit_scores']

@app.route('/', methods=['GET', 'POST'])
def index():
    score = None
    if request.method == 'POST':
        input_data = {
            'Age': int(request.form['Age']),
            'Income': float(request.form['Income']),
            'Employment_Status': request.form['Employment_Status'],
            'Education_Level': request.form['Education_Level'],
            'Marital_Status': request.form['Marital_Status'],
            'Number_of_Dependents': int(request.form['Number_of_Dependents']),
            'Credit_Utilization_Ratio': float(request.form['Credit_Utilization_Ratio']),
            'Missed_Payments_90days': int(request.form['Missed_Payments_90days']),
            'Total_Credit_Accounts': int(request.form['Total_Credit_Accounts']),
            'Debt_to_Income_Ratio': float(request.form['Debt_to_Income_Ratio']),
            'Length_of_Credit_History': float(request.form['Length_of_Credit_History']),
            'Bankruptcies': int(request.form['Bankruptcies']),
        }

        df = pd.DataFrame([input_data])
        transformed = preprocessor.transform(df)
        score = model.predict(transformed)[0]

        if not (300 <= score <= 850):
            score = None # Reset score so it doesn't display

        else:
            # Store in MongoDB only if score is valid
            input_data['Predicted_Credit_Score'] = float(score)
            collection.insert_one(input_data)

    return render_template('index.html', score=score)
if __name__ == "__main__":
    app.run(debug=True)