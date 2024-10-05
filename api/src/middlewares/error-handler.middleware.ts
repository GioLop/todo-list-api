import { NextFunction, Request, Response } from 'express';

const errorHandler = (err:Error, req:Request, res:Response, next:NextFunction) => {
    if (!err) return next();
    
    res.status(500).json({
        message: err.message,
        error: err.name
    });
};

export default errorHandler;