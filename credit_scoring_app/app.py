from flask import Flask, render_template, request, jsonify
import pickle
import numpy as np
from pymongo import MongoClient

app = Flask(__name__)

# Load trained model
with open("ml_model/credit_model.pkl", "rb") as file:
    model = pickle.load(file)

# MongoDB Connection
client = MongoClient("mongodb://localhost:27017/")
db = client["credit_scoring"]
collection = db["users"]

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        # Get form data
        user_data = {
            "name": request.form["name"],
            "age": int(request.form["age"]),
            "marital_status": request.form["marital_status"],
            "profession": request.form["profession"],
            "job_years": float(request.form["job_years"]),
            "work_experience": float(request.form["work_experience"]),
            "income": float(request.form["income"]),
            "state": request.form["state"],
            "house_ownership": request.form["house_ownership"],
            "residence_years": float(request.form["residence_years"]),
            "car_ownership": request.form["car_ownership"]
        }

        # Convert input to model format
        features = np.array([[user_data["age"], user_data["job_years"], user_data["work_experience"],
                              user_data["income"], user_data["residence_years"]]])

        # Predict credit score
        predicted_score = int(model.predict(features)[0])
        
        # Save to MongoDB
        user_data["credit_score"] = predicted_score
        collection.insert_one(user_data)

        return render_template("result.html", score=predicted_score)
    
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
