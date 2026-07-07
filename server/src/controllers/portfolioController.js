import { Portfolio } from '../models/Portfolio.js';
import { failure, success } from '../utils/apiResponse.js';

export const createPortfolioItem = async (req, res) => {
  const item = await Portfolio.create(req.body);
  return success(res, item, 'Portfolio item created', 201);
};

export const getPortfolioItems = async (req, res) => {
  const query = {};
  if (req.query.category) query.category = req.query.category;
  if (req.query.featured === 'true') query.featured = true;
  const items = await Portfolio.find(query).sort({ createdAt: -1 });
  return success(res, items, 'Portfolio fetched');
};

export const updatePortfolioItem = async (req, res) => {
  const item = await Portfolio.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!item) return failure(res, 'Portfolio item not found', 404);
  return success(res, item, 'Portfolio item updated');
};

export const deletePortfolioItem = async (req, res) => {
  const item = await Portfolio.findByIdAndDelete(req.params.id);
  if (!item) return failure(res, 'Portfolio item not found', 404);
  return success(res, null, 'Portfolio item deleted');
};
