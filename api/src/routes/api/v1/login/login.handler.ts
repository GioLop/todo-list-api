import { NextFunction, Request, Response } from 'express';
import { Login } from '../../../../types/user.type';
import { getUserByEmail } from '../../../../models/user.model';
import apiError from '../../../../lib/api-error.lib';
import { comparePassword } from '../../../../lib/password.lib';
import { signToken } from '../../../../lib/token.lib';

const httpLoginPostHandler = async (req:Request, res:Response, next: NextFunction) => {
    const { email, password } = req.body as Login;
    
    try {
        const user = await getUserByEmail(email);
        
        if (!user)
            return next(apiError.notFound(`User with the email ${email} doesn't exist.`));

        const passwordMatch = await comparePassword(password, user.password);
        
        if (!passwordMatch)
            return next(apiError.unAuthorized('Wrong password'));
        
        const token = signToken(user);

        res.json({ token });
    } catch (error) {
        next(error);
    }
};

export {
    httpLoginPostHandler
};