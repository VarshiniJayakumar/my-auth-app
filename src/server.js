const app = require('./app');
const connectDB = require('./config/db');

// Check for JWT_SECRET
if (!process.env.JWT_SECRET) {
  console.error('❌ Error: JWT_SECRET is not defined in environment variables.');
  process.exit(1);
}

const startServer = async () => {
  try {
    // Connect to database
    await connectDB();

    const PORT = process.env.PORT || 5000;

    const server = app.listen(PORT, () => {
      console.log(`✅ Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
    });

    // Handle unhandled promise rejections
    process.on('unhandledRejection', (err, promise) => {
      console.error(`❌ Unhandled Rejection: ${err.message}`);
      if (err.stack) console.error(err.stack);
      // In production, you might want to keep the server running and just log the error
      // but for many platforms, exiting and letting the orchestrator restart is safer.
      server.close(() => process.exit(1));
    });

    // Handle uncaught exceptions
    process.on('uncaughtException', (err) => {
      console.error(`❌ Uncaught Exception: ${err.message}`);
      if (err.stack) console.error(err.stack);
      process.exit(1);
    });

  } catch (error) {
    console.error(`❌ Server failed to start: ${error.message}`);
    process.exit(1);
  }
};

startServer();
