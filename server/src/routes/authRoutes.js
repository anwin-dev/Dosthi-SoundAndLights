import express from 'express';
import { adminLogin, forgotPassword, login, me, register, resetPassword } from '../controllers/authController.js';
import { protect } from '../middlewares/auth.js';
import { success } from '../utils/apiResponse.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/admin/login', adminLogin);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.post('/logout', (req, res) => success(res, null, 'Logout successful'));
router.get('/me', protect, me);

export default router;
