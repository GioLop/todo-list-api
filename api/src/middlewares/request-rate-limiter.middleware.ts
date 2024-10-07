import rateLimit from 'express-rate-limit';

const requestRateLimiter = rateLimit({
    windowMs: 15 * 60 * 100,
    max: 100,
    message: 'Too many requests from this IP, please try again later.'
});

export default requestRateLimiter;