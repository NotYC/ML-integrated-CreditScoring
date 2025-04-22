const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const loginUser = require('./auth_2/loginUser');
const registerUser = require('./auth_2/registerUser');
const User = require('./mongoFrame/userFrame.js');
const Bank = require('./mongoFrame/bankFrame.js');
const cookieParser = require('cookie-parser')
require('dotenv').config();

const app = express();
//app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173', // your frontend's URL
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// Connect MongoDB
mongoose.connect(`mongodb://${process.env.mongo_connect}:27017/KYCS`, {authSource: 'admin'})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB error:", err));

// Route to handle signup
app.post('/signup', async (req, res) => {
  try {
    console.log(req.body)
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
    const newUser = await User.findOne({ email });
    
    
    // Check if default bank already exists.
    const existingBank = await Bank.findOne({
      userId: newUser._id,
      bankName: `${newUser.firstName}'s_account`
    });

    // If not, create a default bank account.
    if (!existingBank) {
      const newBank = new Bank({
        userId: newUser._id,
        bankName: `${newUser.firstName}'s_account`,
        branch: "Default Branch",
        accountNumber: "0000000000",
        ifsc: "DEFAULTIFSC",
        accountType: "DEFAULTTYPE",
        pan: "DEFAULTPAN",
        phone: "DEFAULTPHONE"
      });
      await newBank.save();
    }

    res.send("Email verified! You can now log in.");
  } catch (err) {
    console.error("Verification error:", err); 
    res.status(400).send("Verification failed.");

  }
});
//yha se myProfile ka backend shuru
app.get('/userdata', async (req, res) => {
  const email = req.query.email;
  try {
    const user = await User.findOne({ email }).select('-password');
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.json({ success: true, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error fetching user data" });
  }
});

const bcrypt = require('bcrypt');
const multer = require('multer'); // for profile photo
const upload = multer(); // or configure for file storage

app.put('/updateProfile', upload.single('profilePhoto'), async (req, res) => {
  const { email, password, firstName, lastName, phone, address } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ success: false, message: "Incorrect password" });

    user.firstName = firstName;
    user.lastName = lastName;
    user.phone = phone;
    user.address = address;

    // Handle profile photo update if sent
    if (req.file) {
      const buffer = req.file.buffer.toString('base64');
      user.profilePhoto = `data:${req.file.mimetype};base64,${buffer}`;
    }

    await user.save();
    res.json({ success: true, message: "Profile updated successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Update failed" });
  }
});





// Route to handle login
app.post('/login', async (req, res) => {
  try {
    const result = await loginUser(req.body);
    if (result.success) {
      // Set cookies
      res
          .cookie('email', result.email, { httpOnly: false, sameSite: 'Lax' })
          .cookie('firstname', result.firstName, { httpOnly: false, sameSite: 'Lax' })
          .cookie('lastname', result.lastName, { httpOnly: false, sameSite: 'Lax' })
          .status(200)
          .json({ success:result.success ,message: result.message });
    } else {
      res.status(401).json({ message: result.message });
    }

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error during login' });
  }
});
console.log(`${process.env.backend_server}`)
app.listen(5000, `${process.env.backend_server}`, () => {
  console.log('Server is running...');
});