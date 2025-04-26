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

  const verificationLink = `http://${process.env.verify_email}:${process.env.back_port}/verify?email=${encodeURIComponent(email)}`;

  await transporter.sendMail({
    from: `"KYCS: Know your Credit Score" <${process.env.Sender_Mail}>`,
    to: email,
    subject: 'KYCS Sign-Up Verification',
    html: `<h2>Welcome to Know Your Credit Score</h2>
<p>We received a sign-up request using your email. If this was you, please confirm your email by clicking the button below:</p>
<p><a href="${verificationLink}" style="padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none;">Verify Email</a></p>
<p>If you didn’t request this, you can safely ignore this message.</p>
`
  });
}

module.exports = sendVerification;
