const nodemailer = require('nodemailer');
require('dotenv').config();

async function sendVerification(email) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: `${process.env.Sender_Mail}`,
      pass: process.env.GMAIL_PASSWORD // not your real email password
    }
  });

  const verificationLink = `http://${process.env.backend_server}:${process.env.back_port}/verify?email=${encodeURIComponent(email)}`;

  await transporter.sendMail({
    from: `"KYCS Sign-Up Verification" <${process.env.Sender_Mail}>`,
    to: email,
    subject: 'A sign-up attempt was made from this email.\nIf it was you, Please verify your email',
    html: `<h2>Verify your email</h2><p><a href="${verificationLink}">Click here to verify</a></p>`
  });
}

module.exports = sendVerification;
