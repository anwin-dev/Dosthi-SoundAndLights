import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, index: true },
    venue: { type: String, required: true },
    guests: { type: Number },
    budget: { type: Number },
    eventDate: { type: Date, required: true, index: true },
    slot: { type: String, enum: ['morning', 'afternoon', 'night'], required: true },
    servicesNeeded: [{ type: String }],
    equipmentAvailability: { type: String, enum: ['available', 'partial', 'booked'], default: 'available' },
    status: { type: String, enum: ['pending', 'approved', 'rejected', 'completed', 'cancelled'], default: 'pending', index: true },
    message: { type: String, trim: true },
  },
  { timestamps: true },
);

bookingSchema.index({ eventDate: 1, slot: 1 });

export const Booking = mongoose.model('Booking', bookingSchema);
