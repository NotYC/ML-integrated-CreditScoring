const bcrypt = require('bcryptjs');
const User = require('../models/User');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const signupHandler = async (req, res) => {
  try {
    const { password, email, ...rest } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      ...rest,
      email,
      password: hashedPassword,
      verified: 'no',
    });

    await newUser.save();

    // Generate token
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' });

    // Send verification email
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // or your SMTP provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const verificationUrl = `http://localhost:5000/verify?token=${token}`;

    await transporter.sendMail({
      to: email,
      subject: 'Verify your email',
      html: <p>Click <a href="${verificationUrl}">here</a> to verify your account.</p>,
    });

    res.status(201).json({ message: 'User created, verification email sent' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Signup failed', error });
  }
};

module.exports = signupHandler;