const bcrypt = require('bcrypt');
const User = require('../mongoFrame/userFrame.js');
const sendVerification = require('./sendVerification');

async function registerUser(data) {
  const { firstName, lastName,address,city,state,postalCode,dob,uid, email, password } = data;
  console.log(firstName)
  console.log(lastName)
  console.log(address)
  console.log(city)
  console.log(state)
  console.log(postalCode)
  console.log(dob)
  console.log(uid)
  console.log(email)
  console.log(password)

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    firstName,
    lastName,
    address,
    city,
    state,
    postalCode,
    dob,
    uid,
    email,
    password: hashedPassword,
    isVerified: "NO"
  });

  await newUser.save();

  await sendVerification(email);

  return { success: true, message: "User registered. Please verify your email." };
}

module.exports = registerUser;
