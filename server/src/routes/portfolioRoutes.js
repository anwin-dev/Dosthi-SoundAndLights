import express from 'express';
import {
  createPortfolioItem,
  deletePortfolioItem,
  getPortfolioItems,
  updatePortfolioItem,
} from '../controllers/portfolioController.js';
import { authorize, protect } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', getPortfolioItems);
router.post('/', protect, authorize('admin'), createPortfolioItem);
router.patch('/:id', protect, authorize('admin'), updatePortfolioItem);
router.delete('/:id', protect, authorize('admin'), deletePortfolioItem);

export default router;
