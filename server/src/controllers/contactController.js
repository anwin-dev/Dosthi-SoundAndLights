import nodemailer from 'nodemailer';
import { env } from '../config/env.js';
import { ContactMessage } from '../models/ContactMessage.js';
import { Newsletter } from '../models/Newsletter.js';
import { success } from '../utils/apiResponse.js';

const transporter =
  env.smtpHost && env.smtpUser && env.smtpPass
    ? nodemailer.createTransport({
        host: env.smtpHost,
        port: env.smtpPort,
        secure: env.smtpPort === 465,
        auth: { user: env.smtpUser, pass: env.smtpPass },
      })
    : null;

export const submitContact = async (req, res) => {
  const message = await ContactMessage.create(req.body);

  if (transporter) {
    await transporter.sendMail({
      to: env.adminEmail,
      from: env.smtpUser,
      subject: `Contact: ${req.body.subject ?? 'Website Inquiry'}`,
      text: req.body.message,
    });
  }

  return success(res, message, 'Message submitted', 201);
};

export const subscribeNewsletter = async (req, res) => {
  const newsletter = await Newsletter.findOneAndUpdate(
    { email: req.body.email?.toLowerCase() },
    { email: req.body.email?.toLowerCase() },
    { upsert: true, new: true },
  );
  return success(res, newsletter, 'Subscribed successfully', 201);
};

export const listMessages = async (req, res) => {
  const messages = await ContactMessage.find().sort({ createdAt: -1 });
  return success(res, messages, 'Contact messages fetched');
};
