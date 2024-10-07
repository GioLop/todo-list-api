import express from 'express';
import bodyParser from 'body-parser';
import appRouter from './routes/app.router';
import boomErrorHandler from './middlewares/boom-error-handler.middleware';
import logError from './middlewares/log-error.middleware';
import errorHandler from './middlewares/error-handler.middleware';
import requestRateLimiter from './middlewares/request-rate-limiter.middleware';

const app = express();

app.use(requestRateLimiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', appRouter);

app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

export default app;