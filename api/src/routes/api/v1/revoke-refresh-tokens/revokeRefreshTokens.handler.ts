import { NextFunction, Request, Response } from 'express';

const revokeRefreshTokensPostHandler = (_req:Request, res:Response, next:NextFunction) => {
    try {
        res.json({ messsage: 'Hello from revoke refresh tokens' });
    } catch (error) {
        next(error);
    }
};

export {
    revokeRefreshTokensPostHandler
};