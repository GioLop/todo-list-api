import { NextFunction, Request, Response } from 'express';

const logError = (err: Error, req:Request, res:Response, next:NextFunction) => {
    console.log('Log Error');
    console.log(err.message);
    next(err);
};

export default logError;