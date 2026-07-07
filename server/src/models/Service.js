import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, index: true },
    category: { type: String, required: true, index: true },
    subcategory: { type: String },
    description: { type: String, required: true },
    pricing: {
      basePrice: { type: Number, default: 0 },
      currency: { type: String, default: 'INR' },
      pricingNote: { type: String },
    },
    equipmentUsed: [{ type: String }],
    bannerUrl: { type: String },
    active: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export const Service = mongoose.model('Service', serviceSchema);
