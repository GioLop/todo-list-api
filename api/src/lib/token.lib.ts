import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';

const SECRET_KEY = 'some-secret';

const signToken = (user: User) => {
    const { id, email, role } = user; 
    return jwt.sign({ id, email, role }, SECRET_KEY, {
        expiresIn: '2 days'
    });
};

const verifyToken = (token:string) => jwt.verify(token, SECRET_KEY);

const getPlainToken = (token: string) => token.replace('Bearer', '').trim();

export {
    signToken,
    verifyToken,
    getPlainToken
};