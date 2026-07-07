import { Booking } from '../models/Booking.js';
import { ContactMessage } from '../models/ContactMessage.js';
import { Gallery } from '../models/Gallery.js';
import { Portfolio } from '../models/Portfolio.js';
import { Service } from '../models/Service.js';
import { User } from '../models/User.js';
import { success } from '../utils/apiResponse.js';

export const getDashboardAnalytics = async (req, res) => {
  const [users, bookings, services, gallery, portfolio, messages] = await Promise.all([
    User.countDocuments(),
    Booking.countDocuments(),
    Service.countDocuments(),
    Gallery.countDocuments(),
    Portfolio.countDocuments(),
    ContactMessage.countDocuments(),
  ]);

  const bookingStatus = await Booking.aggregate([
    { $group: { _id: '$status', count: { $sum: 1 } } },
  ]);

  return success(res, { users, bookings, services, gallery, portfolio, messages, bookingStatus }, 'Admin dashboard analytics');
};
