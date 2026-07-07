import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true, index: true },
    type: { type: String, enum: ['image', 'video'], required: true },
    mediaUrl: { type: String, required: true },
    thumbnailUrl: { type: String, required: true },
    featured: { type: Boolean, default: false, index: true },
    summary: { type: String },
  },
  { timestamps: true },
);

export const Portfolio = mongoose.model('Portfolio', portfolioSchema);
