const bcrypt = require('bcrypt');
const User = require('../mongoFrame/userFrame.js');
const sendVerification = require('./sendVerification');

async function registerUser(data) {
  const { username, email, password } = data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
    isVerified: "NO"
  });

  await newUser.save();

  await sendVerification(email);

  return { success: true, message: "User registered. Please verify your email." };
}

module.exports = registerUser;
