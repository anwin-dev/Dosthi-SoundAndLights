import { User } from '../models/User.js';
import { failure } from '../utils/apiResponse.js';
import { verifyToken } from '../utils/token.js';

export const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) return failure(res, 'Unauthorized', 401);

    const token = authHeader.replace('Bearer ', '').trim();
    const decoded = verifyToken(token);
    const user = await User.findById(decoded.id);
    if (!user) return failure(res, 'Unauthorized', 401);

    req.user = { id: user._id.toString(), role: user.role, email: user.email };
    return next();
  } catch {
    return failure(res, 'Invalid token', 401);
  }
};

export const authorize = (...roles) => (req, res, next) => {
  if (!req.user || !roles.includes(req.user.role)) return failure(res, 'Forbidden', 403);
  return next();
};
