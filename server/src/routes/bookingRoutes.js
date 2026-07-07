import express from 'express';
import {
  calendarOverview,
  cancelBooking,
  checkSlotAvailability,
  createBooking,
  getBookings,
  setBookingStatus,
  updateBooking,
} from '../controllers/bookingController.js';
import { authorize, protect } from '../middlewares/auth.js';

const router = express.Router();

router.get('/calendar', protect, calendarOverview);
router.get('/availability', protect, checkSlotAvailability);
router.get('/', protect, getBookings);
router.post('/', protect, createBooking);
router.patch('/:id', protect, updateBooking);
router.patch('/:id/cancel', protect, cancelBooking);
router.patch('/:id/status', protect, authorize('admin'), setBookingStatus);

export default router;
