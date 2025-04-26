const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const PORT = 3000;

// Replace this with your actual model server (Flask) IP and port
const MODEL_SERVER_URL = "http://<MODEL_PC_IP>:5000/predict"; // e.g., http://192.168.1.10:5000/predict

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public"))); // for HTML, CSS, etc.

// Serve form.html as default
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "form.html"));
});

// Endpoint to handle form data and get prediction from Flask server
app.post("/submit", async (req, res) => {
  try {
    const userData = req.body;

    // Send data to the Flask model server
    const response = await axios.post(MODEL_SERVER_URL, userData);

    // Assuming response from Flask contains { score: 745, rating: "Very Good" }
    const { score, rating } = response.data;

    res.json({ score, rating });
  } catch (err) {
    console.error("Error contacting model server:", err.message);
    res.status(500).json({ message: "Failed to fetch prediction from model server" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Frontend server is running at http://localhost:${PORT}`);
});
