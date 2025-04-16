const nodemailer = require('nodemailer');
require('dotenv').config();

async function sendVerification(email) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: '####',
      pass: process.env.GMAIL_PASSWORD // not your real email password
    }
  });

  const verificationLink = `http://localhost:5000/verify?email=${encodeURIComponent(email)}`;

  await transporter.sendMail({
    from: '"Your App" <####>',
    to: email,
    subject: 'Please verify your email',
    html: `<h2>Verify your email</h2><p><a href="${verificationLink}">Click here to verify</a></p>`
  });
}

module.exports = sendVerification;
