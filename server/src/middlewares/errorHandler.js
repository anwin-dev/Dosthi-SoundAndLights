import { failure } from '../utils/apiResponse.js';

export const notFound = (req, res) => failure(res, `Route not found: ${req.originalUrl}`, 404);

export const errorHandler = (error, req, res, next) => {
  if (res.headersSent) return next(error);
  return failure(res, error.message || 'Internal server error', 500);
};
