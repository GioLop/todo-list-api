import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';

const SECRET_KEY = '';

const signToken = (user: User) => {
    const { id, email, role } = user; 
    return jwt.sign({ id, email, role }, SECRET_KEY, {
        expiresIn: '2 days'
    });
};

const verifyToken = (token:string) => jwt.verify(token, SECRET_KEY);;

export {
    signToken,
    verifyToken
};