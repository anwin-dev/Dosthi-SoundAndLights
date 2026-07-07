import { Gallery } from '../models/Gallery.js';
import { failure, success } from '../utils/apiResponse.js';

export const createGalleryItem = async (req, res) => {
  const item = await Gallery.create(req.body);
  return success(res, item, 'Gallery item created', 201);
};

export const getGalleryItems = async (req, res) => {
  const query = {};
  if (req.query.album) query.album = req.query.album;
  if (req.query.category) query.category = req.query.category;
  const items = await Gallery.find(query).sort({ createdAt: -1 });
  return success(res, items, 'Gallery fetched');
};

export const updateGalleryItem = async (req, res) => {
  const item = await Gallery.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!item) return failure(res, 'Gallery item not found', 404);
  return success(res, item, 'Gallery item updated');
};

export const deleteGalleryItem = async (req, res) => {
  const item = await Gallery.findByIdAndDelete(req.params.id);
  if (!item) return failure(res, 'Gallery item not found', 404);
  return success(res, null, 'Gallery item deleted');
};
