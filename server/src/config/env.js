import dotenv from 'dotenv';

dotenv.config();

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 5000),
  mongoUri: process.env.MONGO_URI ?? 'mongodb://127.0.0.1:27017/dosthi',
  jwtSecret: process.env.JWT_SECRET ?? 'replace-me',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN ?? '7d',
  smtpHost: process.env.SMTP_HOST ?? '',
  smtpPort: Number(process.env.SMTP_PORT ?? 587),
  smtpUser: process.env.SMTP_USER ?? '',
  smtpPass: process.env.SMTP_PASS ?? '',
  adminEmail: process.env.ADMIN_EMAIL ?? 'admin@dosthi.com',
};
