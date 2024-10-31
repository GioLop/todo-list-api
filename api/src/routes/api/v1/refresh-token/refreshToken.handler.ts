import { NextFunction, Request, Response } from 'express';
import { RefreshTokenRequest } from '../../../../types/requests.type';
import { hashToken, signAccessToken, verifyRefreshToken } from '../../../../lib/token.lib';
import { getSavedRefreshTokens } from '../../../../models/refresh-token.model';
import { RefreshTokenBase } from '../../../../types/token.type';
import apiError from '../../../../lib/api-error.lib';
import { getUserById } from '../../../../models/user.model';

const httpRefreshTokenPostHandler = async (req:Request, res:Response, next:NextFunction) => {
    const { refreshToken } = (req.body as RefreshTokenRequest);
    
    try {
        const { userId } = verifyRefreshToken(refreshToken) as RefreshTokenBase;
        const hashedToken = hashToken(refreshToken);
        const tokens = await getSavedRefreshTokens(userId);
        const savedToken = tokens.find((_token) => _token.hashedToken === hashedToken);
        
        if (!savedToken || savedToken.revoked) {
            return next(apiError.unAuthorized('Unauthorized Token'));
        }

        const user = await getUserById(userId);
        
        if (!user) {
            return next(apiError.unAuthorized('Unauthorized User'));
        };

        const newAccesstoken = signAccessToken(user);

        res.json({
            accessToken: newAccesstoken,
        });
    } catch (error) {
        next(error);
    }
};

export {
    httpRefreshTokenPostHandler
};