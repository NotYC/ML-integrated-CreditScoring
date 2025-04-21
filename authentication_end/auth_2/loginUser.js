// loginUser.js
const bcrypt = require('bcrypt');
const User = require('../mongoFrame/userFrame.js');

async function loginUser(data) {
  const { email, password } = data;

  const user = await User.findOne({ email });

  if (!user) {
    return { success: false, message: "Invalid email" };
  }

  if (user.isVerified !== "YES") {
    return { success: false, message: "Please verify your email first." };
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return { success: false, message: "Incorrect password" };
  }

  return { success: true, message: "Login successful", userId: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email };
}

module.exports = loginUser;
