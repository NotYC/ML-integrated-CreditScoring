// backend/routes/creditHistoryRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  getCreditHistory,
  addCreditHistory,
} = require('../controllers/creditHistoryController');

router.get('/', auth, getCreditHistory);
router.post('/', auth, addCreditHistory);

module.exports = router;
