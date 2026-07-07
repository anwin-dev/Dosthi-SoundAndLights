import { connectDB } from './config/db.js';
import { env } from './config/env.js';
import { app } from './app.js';

const startServer = async () => {
  await connectDB();
  app.listen(env.port, () => {
    // eslint-disable-next-line no-console
    console.log(`API running on port ${env.port}`);
  });
};

startServer().catch((error) => {
  // eslint-disable-next-line no-console
  console.error('Failed to start server', error);
  process.exit(1);
});
