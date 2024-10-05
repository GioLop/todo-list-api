import { NextFunction, Request, Response } from 'express';
import { AuthHeader } from '../types/requests.type';
import apiError from '../lib/api-error.lib';
import { getPlainToken, verifyToken } from '../lib/token.lib';

const authorize = (req:Request, res:Response, next:NextFunction) => {
    const { authorization } = req.headers as AuthHeader;

    if (!authorization)
        return next(apiError.unAuthorized('Request headers should contain the authorization token.')); 
    
    if(!authorization.includes('Bearer'))
        return next(apiError.badRequest(new Error('Token should start with "Bearer"'))); 

    const token = getPlainToken(authorization);

    try {
        verifyToken(token);
        next();
    } catch (error) {
        console.log(error);
        return next(apiError.unAuthorized('Unauthorized to see this content')); 
    }

    next();
};

export default authorize;