import express from 'express';
import bodyParser from 'body-parser';
import appRouter from './routes/app.router';
import boomErrorHandler from './middlewares/boom-error-handler.middleware';
import logError from './middlewares/log-error.middleware';
import errorHandler from './middlewares/error-handler.middleware';
import requestRateLimiter from './middlewares/request-rate-limiter.middleware';
import cors, { CorsOptions } from 'cors';

const whitelist = ['http://localhost:8000'];

const corsOptions: CorsOptions = {
     // eslint-disable-next-line no-unused-vars
     origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

const app = express();

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors(corsOptions));
app.use(requestRateLimiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', appRouter);

app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

export default app;