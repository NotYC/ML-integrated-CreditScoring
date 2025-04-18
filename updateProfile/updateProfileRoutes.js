// updateProfile/updateProfileRoutes.js
const express = require('express');
const router = express.Router();
const { getProfile, updateProfile } = require('./updateProfileController');

router.get('/', getProfile);        // GET /api/profile?email=...
router.put('/', updateProfile);     // PUT /api/profile

module.exports = router;
