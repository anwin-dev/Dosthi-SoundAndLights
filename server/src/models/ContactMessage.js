import mongoose from 'mongoose';

const contactMessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    phone: { type: String },
    subject: { type: String },
    message: { type: String, required: true },
    status: { type: String, enum: ['new', 'read', 'archived'], default: 'new' },
  },
  { timestamps: true },
);

export const ContactMessage = mongoose.model('ContactMessage', contactMessageSchema);
