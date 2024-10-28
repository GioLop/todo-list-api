import { NextFunction, Request, Response } from 'express';
import { AuthHeader } from '../types/requests.type';
import apiError from '../lib/api-error.lib';
import { getPlainToken, verifyAccessToken } from '../lib/token.lib';

const authorize = (req:Request, res:Response, next:NextFunction) => {
    const { authorization } = req.headers as AuthHeader;

    if (!authorization)
        return next(apiError.unAuthorized('Request headers should contain the authorization token.')); 
    
    if(!authorization.includes('Bearer'))
        return next(apiError.badRequest('Token should start with "Bearer"')); 

    const token = getPlainToken(authorization);

    try {
        verifyAccessToken(token);
        next();
    } catch (error) {
        return next(apiError.unAuthorized(`Unauthorized to see this content: ${(error as Error).message}`)); 
    }
};

export default authorize;