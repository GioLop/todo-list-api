import { NextFunction, Request, Response } from 'express';
import { hashToken, verifyRefreshToken } from '../../../../lib/token.lib';
import { RefreshTokenBase } from '../../../../types/token.type';
import { getSavedRefreshTokens, revokeRefreshToken } from '../../../../models/refresh-token.model';
import { RefreshTokenRequest } from '../../../../types/requests.type';
import apiError from '../../../../lib/api-error.lib';
import { getUserById } from '../../../../models/user.model';

const revokeTokenPostHandler = async (req:Request, res:Response, next:NextFunction) => {
    const { refreshToken } = (req.body as RefreshTokenRequest);

    try {
        const { userId } = verifyRefreshToken(refreshToken) as RefreshTokenBase;
        const hashedToken = hashToken(refreshToken);
        const tokens = await getSavedRefreshTokens(userId);
        const savedToken = tokens.find((_token) => _token.hashedToken === hashedToken);
        
        if (!savedToken || savedToken.revoked) {
            return next(apiError.unAuthorized('Unauthorized'));
        }

        const user = await getUserById(userId);
        
        if (!user) {
            return next(apiError.unAuthorized('Unauthorized'));
        };

        await revokeRefreshToken(savedToken?.id);

        res.sendStatus(200);
    } catch (error) {
        next(error);
    }
};

export {
    revokeTokenPostHandler
};