const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const loginUser = require('./auth_2/loginUser');
const registerUser = require('./auth_2/registerUser');
const User = require('./mongoFrame/userFrame.js');
const Bank = require('./mongoFrame/bankFrame.js');
const GenerationHistory = require('./mongoFrame/generationHistory.js');
const logRegisterer = require('./webPage/generationLog.js')
const cookieParser = require('cookie-parser')
require('dotenv').config();

const app = express();

const allowedOrigins = [
   `http://${process.env.frontend_server}:${process.env.front_port}`,
   'http://localhost:5002',
   'http://127.0.0.1:5002',
   'http://192.168.137.1:5002'
 ];
app.use(cors({

   origin: function (origin, callback) {
     if (!origin || allowedOrigins.includes(origin)) {
       callback(null, true);
     } else {
       callback(new Error('Not allowed by CORS'));
     }
   },
   credentials: true
 }));
app.use(express.json());
app.use(cookieParser());

// Connect MongoDB
mongoose.connect(`mongodb://${process.env.mongo_connect}`, {authSource: 'admin'})
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

    res.redirect(`http://${process.env.frontend_server}:${process.env.front_port}/signin`);
  } catch (err) {
    console.error("Verification error:", err); 
    res.status(400).send("Verification failed.");

  }
});

//myProfile backend
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

app.post('/logHandler', async (req, res) => {
  try {
    console.log(req.body)
    const result = await logRegisterer(req.body);
    res.json(result);

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Error during logging' });
  }
})

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

// in your main backend file (e.g. index.js), after your other routes:
app.get('/credit-history', async (req, res) => {
  try {
    const email = req.query.email;
    if (!email) {
      return res.status(400).json({ success: false, message: "Email query parameter is required" });
    }

    // 1) find the user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // 2) find their (single) bank
    const bank = await Bank.findOne({ userId: user._id });
    if (!bank) {
      // no bank linked → let frontend know
      return res.json({ success: true, bankLinked: false, history: [] });
    }
    const bankId = bank._id;

    // 3) fetch all score‐generations for that bank, newest first
    const docs = await GenerationHistory
      .find({ bankId })
      .sort({ createdAt: -1 })
      .populate('bankId', 'bankName'); // only pull bankName from the Bank
      
    console.log(docs)

    // 4) shape the payload for the frontend
    const history = docs.map(doc => ({
      accountName: doc.bankId.bankName,
      score:       doc.score,
      rating:      doc.rating,
      date:        doc.createdAt.toLocaleDateString()
    }));

    // 5) send success, bankLinked flag, and the array
    res.json({ success: true, bankLinked: true, history });

  } catch (err) {
    console.error("Error fetching credit history:", err);
    res.status(500).json({ success: false, message: "Failed to fetch credit history" });
  }
});

console.log(`${process.env.backend_server}`)
app.listen(process.env.back_port, `${process.env.backend_server}`, () => {
  console.log('Server is running...');
});