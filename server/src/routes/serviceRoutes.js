import express from 'express';
import { createService, deleteService, getServiceById, getServices, updateService } from '../controllers/serviceController.js';
import { authorize, protect } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', getServices);
router.get('/:id', getServiceById);
router.post('/', protect, authorize('admin'), createService);
router.patch('/:id', protect, authorize('admin'), updateService);
router.delete('/:id', protect, authorize('admin'), deleteService);

export default router;
