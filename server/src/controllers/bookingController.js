import { Booking } from '../models/Booking.js';
import { failure, success } from '../utils/apiResponse.js';

export const createBooking = async (req, res) => {
  const payload = { ...req.body, userId: req.user?.id };
  const existing = await Booking.findOne({
    eventDate: payload.eventDate,
    slot: payload.slot,
    status: { $in: ['pending', 'approved', 'completed'] },
  });

  if (existing) return failure(res, 'Selected slot is unavailable', 409);

  const booking = await Booking.create(payload);
  return success(res, booking, 'Booking request created', 201);
};

export const getBookings = async (req, res) => {
  const query = req.user.role === 'admin' ? {} : { userId: req.user.id };
  const bookings = await Booking.find(query).sort({ eventDate: 1 });
  return success(res, bookings, 'Bookings fetched');
};

export const updateBooking = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) return failure(res, 'Booking not found', 404);
  if (req.user.role !== 'admin' && booking.userId?.toString() !== req.user.id) return failure(res, 'Forbidden', 403);

  Object.assign(booking, req.body);
  await booking.save();
  return success(res, booking, 'Booking updated');
};

export const cancelBooking = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) return failure(res, 'Booking not found', 404);
  if (req.user.role !== 'admin' && booking.userId?.toString() !== req.user.id) return failure(res, 'Forbidden', 403);

  booking.status = 'cancelled';
  await booking.save();
  return success(res, booking, 'Booking cancelled');
};

export const setBookingStatus = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) return failure(res, 'Booking not found', 404);

  booking.status = req.body.status;
  await booking.save();
  return success(res, booking, `Booking ${req.body.status}`);
};

export const checkSlotAvailability = async (req, res) => {
  const { date } = req.query;
  const bookings = await Booking.find({
    eventDate: new Date(date),
    status: { $in: ['pending', 'approved', 'completed'] },
  }).select('slot status');

  return success(res, bookings, 'Slot availability fetched');
};

export const calendarOverview = async (req, res) => {
  const bookings = await Booking.aggregate([
    {
      $group: {
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$eventDate' } },
        total: { $sum: 1 },
        approved: {
          $sum: { $cond: [{ $eq: ['$status', 'approved'] }, 1, 0] },
        },
      },
    },
    { $sort: { _id: 1 } },
  ]);

  return success(res, bookings, 'Calendar overview');
};
