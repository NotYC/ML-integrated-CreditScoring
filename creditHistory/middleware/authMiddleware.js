// backend/middleware/authMiddleware.js
const User = require('../models/User');
const cookieParser = require('cookie-parser');

module.exports = async (req, res, next) => {
  // ensure cookieParser is used in server.js before this middleware
  const email = req.cookies?.email;
  if (!email) return res.status(401).json({ message: 'Not authenticated' });

  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: 'User not found' });

  req.user = user;
  next();
};
