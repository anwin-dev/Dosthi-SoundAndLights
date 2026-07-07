import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    album: { type: String, index: true },
    category: { type: String, required: true, index: true },
    type: { type: String, enum: ['photo', 'video'], required: true },
    url: { type: String, required: true },
    thumbnailUrl: { type: String },
  },
  { timestamps: true },
);

export const Gallery = mongoose.model('Gallery', gallerySchema);
