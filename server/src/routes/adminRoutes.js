import express from 'express';
import { getDashboardAnalytics } from '../controllers/adminController.js';
import { authorize, protect } from '../middlewares/auth.js';

const router = express.Router();

router.get('/dashboard', protect, authorize('admin'), getDashboardAnalytics);

export default router;
