// loginUser.js
const bcrypt = require('bcrypt');
const User = require('./mongoFrame/userFrame.js');

async function loginUser(data) {
  const { email, password } = data;

  const user = await User.findOne({ email });

