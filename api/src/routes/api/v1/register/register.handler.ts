import { NextFunction, Request, Response } from 'express';
import { createUser, emailExists } from '../../../../models/user.model';
import { Register } from '../../../../types/user.type';
import apiError from '../../../../lib/api-error.lib';
import { signToken } from '../../../../lib/token.lib';

const httpRegisterPostHandler = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body as Register;
    
    try {
        if (await emailExists(email))
            return next(apiError.conflict(`There is a user registered with the email ${email}`));
        
        const user = await createUser({ name, email, password });
        const token = signToken(user);
        const { id } = user;
    
        res.json({ id, name, email, token });    
    } catch (error) {
        next(error);
    }
};

export {
    httpRegisterPostHandler
};