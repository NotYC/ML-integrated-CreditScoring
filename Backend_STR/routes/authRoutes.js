import express from 'express';
import { registerUser, loginUser, verifyEmail } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', registerUser);
router.post('/signin', loginUser);
router.get('/verify/:token', verifyEmail);

export default router;
