import express from 'express';
import { listMessages, submitContact, subscribeNewsletter } from '../controllers/contactController.js';
import { authorize, protect } from '../middlewares/auth.js';

const router = express.Router();

router.post('/', submitContact);
router.post('/newsletter', subscribeNewsletter);
router.get('/messages', protect, authorize('admin'), listMessages);

export default router;
