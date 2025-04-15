const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.get('/verify', async (req, res) => {
  try {
    const { token } = req.query;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({ email: decoded.email });
    if (!user) return res.status(404).send('User not found');

    user.verified = 'yes';
    await user.save();

    res.send('Email verified successfully');
  } catch (err) {
    res.status(400).send('Invalid or expired token');
  }
});

module.exports = router;
