import { NextFunction, Request, Response } from 'express';
import { Login } from '../../../../types/user.type';
import { getUserByEmail } from '../../../../models/user.model';
import apiError from '../../../../lib/api-error.lib';
import { comparePassword } from '../../../../lib/password.lib';
import { signTokens } from '../../../../lib/token.lib';
import { addRefreshTokenToWhiteList } from '../../../../models/refresh-token.model';

const httpLoginPostHandler = async (req:Request, res:Response, next: NextFunction) => {
    const { email, password } = req.body as Login;
    
    try {
        const user = await getUserByEmail(email);
        
        if (!user)
            return next(apiError.notFound(`User with the email ${email} doesn't exist.`));

        const passwordMatch = await comparePassword(password, user.password);
        
        if (!passwordMatch)
            return next(apiError.unAuthorized('The password doesn\'t match with this user.'));
        
        const { accessToken, refreshToken } = signTokens(user);

        await addRefreshTokenToWhiteList(refreshToken, user.id);

        res.json({
            accessToken,
            refreshToken
        });
    } catch (error) {
        next(error);
    }
};

export {
    httpLoginPostHandler
};