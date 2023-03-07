import express, { json } from 'express';
const app = express();
import itemsRouter from './routes/itemsRouter.mjs';
import connectDB from './db/connect.mjs';
import dotenv from 'dotenv';

import errorHandlerMiddleware from './middleware/error-handler.mjs';
import notFound from './middleware/not-found.mjs';

dotenv.config();

app.use(json());
app.use('/api/v1/items', itemsRouter);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI_LOCAL);
    app.listen(
      process.env.PORT_APP || 5000,
      console.log(`Server is listening on port ${process.env.PORT_APP}`)
    );
  } catch (err) {
    console.log(error);
  }
};

start();
