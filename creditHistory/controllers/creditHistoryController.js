// backend/controllers/creditHistoryController.js
const CreditHistory = require('../models/CreditHistory');

exports.getCreditHistory = async (req, res) => {
  try {
    const user = req.user;
    if (!user.bankLinked) {
      return res.json({ bankLinked: false });
    }
    const history = await CreditHistory
      .find({ userId: user._id })
      .sort({ date: -1 });
    res.json({ bankLinked: true, history });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addCreditHistory = async (req, res) => {
  try {
    const user = req.user;
    if (!user.bankLinked) {
      return res.status(403).json({ message: 'Bank account not linked' });
    }
    const { score } = req.body;
    const entry = await CreditHistory.create({ userId: user._id, score });
    res.json({ success: true, entry });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error saving history' });
  }
};
