import express from 'express';
import { createGalleryItem, deleteGalleryItem, getGalleryItems, updateGalleryItem } from '../controllers/galleryController.js';
import { authorize, protect } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', getGalleryItems);
router.post('/', protect, authorize('admin'), createGalleryItem);
router.patch('/:id', protect, authorize('admin'), updateGalleryItem);
router.delete('/:id', protect, authorize('admin'), deleteGalleryItem);

export default router;
