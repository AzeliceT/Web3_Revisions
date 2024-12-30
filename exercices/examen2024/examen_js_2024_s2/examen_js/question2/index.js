const { MONGODB_URI, PORT, DB_NAME } = require('./utils/config');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const middlewares = require('./utils/middlewares');
const { createDbWithData } = require('./utils/db-creation');
const { asyncStartMongMemoryServer } = require('./utils/mongo-memory-server');
const bookRoutes = require('./routes/books'); // Import book routes
const commentRoutes = require('./routes/comments'); // Import comment routes


const startAsyncDbWork = async () => {
  try {
    if (!MONGODB_URI) {
      const mongoMemoryServer = await asyncStartMongMemoryServer();
      await createDbWithData(mongoMemoryServer);
      // Connect to database
      await mongoose.connect(mongoMemoryServer.getUri(), {
        dbName: DB_NAME ?? 'exam-web3',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to database via Mongoose');
      return;
    }

    await createDbWithData(); // Create Data on Atlas
    // Connect to database
    await mongoose.connect(MONGODB_URI, {
      dbName: DB_NAME ?? 'exam-web3',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to database via Mongoose');
  } catch (err) {
    console.error('Unable to connect to database', err);
  }
};

startAsyncDbWork();

// Create server
const app = express();

// Init server
app.use(cors());
app.use(express.json());
app.use(middlewares.logger);

// Use routes
app.use('/books', bookRoutes); // Add book routes
app.use('/comments', commentRoutes); // Add comment routes

app.use(middlewares.errorHandler);

// Start server
app.listen(PORT ?? 3001, () => {
  console.log(`Server running on port ${PORT ?? 3001}`);
});
