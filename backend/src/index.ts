import * as dotenv from 'dotenv';
import express from 'express';
import { errorHandlerMiddleware } from './api/middleware/errorHandlerMiddleware';

dotenv.config();

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

app.use(errorHandlerMiddleware); // Must be at end

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${port}`);
});
