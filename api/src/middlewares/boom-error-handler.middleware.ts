import { boomify, isBoom } from '@hapi/boom';
import { NextFunction, Request, Response } from 'express';

const boomErrorHandler = (err:Error, _req: Request, res:Response, next:NextFunction) => {
    const isBoomError = isBoom(err);

    if (!isBoomError) return next(err);

    const { output: { statusCode, payload } } = boomify(err);
    res.status(statusCode).json(payload);
};

export default boomErrorHandler;