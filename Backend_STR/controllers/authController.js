import User from '../models/User.js';
import Token from '../models/Token.js';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import transporter from '../config/nodemailer.js';

dotenv.config();

export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ ...req.body, password: hashedPassword });
    await newUser.save();

    // Create verification token
    const verificationToken = new Token({
      userId: newUser._id,
      token: crypto.randomBytes(32).toString('hex'),
    });
    await verificationToken.save();

    // Send verification email
    const url = `${process.env.CLIENT_URL}/api/auth/verify/${verificationToken.token}`;
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: newUser.email,
      subject: 'Verify your Email',
      html: `<p>Please click <a href="${url}">here</a> to verify your email.</p>`,
    });

    res.status(201).json({ message: 'Verification email sent!' });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const token = await Token.findOne({ token: req.params.token });
    if (!token) return res.status(400).json({ message: 'Invalid or expired token' });

    const user = await User.findById(token.userId);
    if (!user) return res.status(400).json({ message: 'User not found' });

    user.verified = true;
    await user.save();
    await token.deleteOne();

    res.status(200).json({ message: 'Email verified successfully!' });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) return res.status(400).json({ message: 'Invalid credentials' });

    if (!existingUser.verified) return res.status(400).json({ message: 'Email not verified' });

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET);
    res.status(200).json({ token, user: existingUser });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
