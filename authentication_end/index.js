const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const registerUser = require('./registerUser');
const User = require('./mongoFrame/userFrame.js');

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect('mongodb://capstone:project@172.19.150.21:27017/signupDB', {authSource: 'admin'})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB error:", err));

// Route to handle signup
app.post('/signup', async (req, res) => {
  try {
    const result = await registerUser(req.body);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error during signup' });
  }
});

// Route to handle email verification
app.get('/verify', async (req, res) => {
  const email = req.query.email;
  try {
    await User.findOneAndUpdate({ email }, { isVerified: "YES" });
    res.send("Email verified! You can now log in.");
  } catch (err) {
    res.status(400).send("Verification failed.");
  }
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
