import { NextFunction, Request, Response } from 'express';
import { getPlainToken, verifyAccessToken } from '../../../../lib/token.lib';
import { UserToken } from '../../../../types/user.type';
import { getUserById } from '../../../../models/user.model';

const httpUserGetHandler = async (req:Request, res: Response, next:NextFunction) => {
    const { authorization } = req.headers;
    
    try {
        const token = getPlainToken((authorization as string));
        const { id } = verifyAccessToken(token) as UserToken;
        const user= await getUserById(id);

        res.json({ email: user?.email, name: user?.name });
    } catch (error) {
       next(error); 
    }
};

export {
    httpUserGetHandler
};