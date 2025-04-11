const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

// MongoDB
mongoose.connect("mongodb://localhost:27017/creditApp", { useNewUrlParser: true });
const Submission = mongoose.model("Submission", new mongoose.Schema({}, { strict: false }));

// Route to show form
app.get("/", (req, res) => {
  res.render("form"); // create form.ejs
});

// Handle form submission
app.post("/submit", async (req, res) => {
  const formData = {
    Age: parseFloat(req.body.age),
    Marital_Status: req.body.marital_status,
    Employment_Status: req.body.profession,
    Education_Level: req.body.education,
    Income: parseFloat(req.body.income),
    Number_of_Dependents: parseInt(req.body.dependents),
    Credit_Utilization_Ratio: parseFloat(req.body.credit_util),
    Missed_Payments_90days: parseInt(req.body.missed_payments),
    Total_Credit_Accounts: parseInt(req.body.total_accounts),
    Debt_to_Income_Ratio: parseFloat(req.body.dti),
    Length_of_Credit_History: parseFloat(req.body.credit_history),
    Bankruptcies: parseInt(req.body.bankruptcies)
  };

  try {
    const response = await axios.post("http://<PC_A_IP>:5001/predict", formData);
    const score = response.data.score;

    const rating = score >= 800 ? "Exceptional" :
                   score >= 740 ? "Very Good" :
                   score >= 670 ? "Good" :
                   score >= 580 ? "Fair" : "Poor";

    // Save to MongoDB
    await Submission.create({ ...formData, score, rating, timestamp: new Date() });

    res.render("result", { score, rating });

  } catch (err) {
    console.error("Prediction error:", err.message);
    res.send("An error occurred: " + err.message);
  }
});

app.listen(3000, () => console.log("Express app running on port 3000"));
