import { NextFunction, Request, Response } from 'express';
import { createUser, emailExists } from '../../../../models/user.model';
import { Register } from '../../../../types/user.type';
import apiError from '../../../../lib/api-error.lib';
import { signTokens } from '../../../../lib/token.lib';
import { addRefreshTokenToWhiteList } from '../../../../models/refresh-token.model';

const httpRegisterPostHandler = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body as Register;
    
    try {
        if (await emailExists(email))
            return next(apiError.conflict(`There is a user registered with the email ${email}`));
        
        const user = await createUser({ name, email, password });
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
    httpRegisterPostHandler
};