import bcrypt from 'bcryptjs';
import crypto from 'node:crypto';
import { env } from '../config/env.js';
import { User } from '../models/User.js';
import { failure, success } from '../utils/apiResponse.js';
import { signToken } from '../utils/token.js';

const sendAuthPayload = (res, user, message) => {
  const token = signToken({ id: user._id.toString(), role: user.role });
  return success(
    res,
    {
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    },
    message,
  );
};

export const register = async (req, res) => {
  const { name, email, password, phone } = req.body;
  if (!name || !email || !password) return failure(res, 'name, email and password are required', 422);

  const existing = await User.findOne({ email: email.toLowerCase() });
  if (existing) return failure(res, 'Email already in use', 409);

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email: email.toLowerCase(), phone, passwordHash, role: 'client' });
  return sendAuthPayload(res, user, 'Registered successfully');
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return failure(res, 'Email and password are required', 422);
  const user = await User.findOne({ email: email?.toLowerCase() });
  if (!user) return failure(res, 'Invalid credentials', 401);

  const valid = await bcrypt.compare(password ?? '', user.passwordHash);
  if (!valid) return failure(res, 'Invalid credentials', 401);

  return sendAuthPayload(res, user, 'Login successful');
};

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return failure(res, 'Email and password are required', 422);
  if (email?.toLowerCase() !== env.adminEmail.toLowerCase()) return failure(res, 'Unauthorized', 401);
  return login(req, res);
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email?.toLowerCase() });
  if (!user) return success(res, null, 'If account exists, reset link has been sent');

  const token = crypto.randomBytes(24).toString('hex');
  user.resetToken = token;
  user.resetTokenExpiry = new Date(Date.now() + 30 * 60 * 1000);
  await user.save();

  return success(res, { resetToken: token }, 'Password reset token generated');
};

export const resetPassword = async (req, res) => {
  const { token, password } = req.body;
  const user = await User.findOne({
    resetToken: token,
    resetTokenExpiry: { $gt: new Date() },
  });
  if (!user) return failure(res, 'Invalid or expired reset token', 400);

  user.passwordHash = await bcrypt.hash(password, 10);
  user.resetToken = undefined;
  user.resetTokenExpiry = undefined;
  await user.save();
  return success(res, null, 'Password reset successful');
};

export const me = async (req, res) => {
  const user = await User.findById(req.user.id).select('-passwordHash -resetToken -resetTokenExpiry');
  return success(res, user, 'Current user profile');
};
