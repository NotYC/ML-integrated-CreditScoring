from flask import Flask, request, jsonify
import joblib
import pymongo
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS so Express can access it

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

    try:
        # Extract features in correct order
        features = [[
            int(data["age"]),
            data["marital_status"],
            data["profession"],
            data["education"],
            float(data["income"]),
            int(data["dependents"]),
            float(data["credit_util"]),
            int(data["missed_payments"]),
            int(data["total_accounts"]),
            float(data["dti"]),
            float(data["credit_history"]),
            int(data["bankruptcies"])
        ]]

        # Preprocess and predict
        X = preprocessor.transform(features)
        score = int(model.predict(X)[0])

        # Determine credit rating
        if score < 580:
            rating = "Poor"
        elif score < 670:
            rating = "Fair"
        elif score < 740:
            rating = "Good"
        elif score < 800:
            rating = "Very Good"
        else:
            rating = "Exceptional"

        # Save to MongoDB
        collection.insert_one({**data, "score": score, "rating": rating})

        return jsonify({"score": score, "rating": rating})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
