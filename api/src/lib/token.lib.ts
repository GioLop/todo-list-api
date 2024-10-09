import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';
import appConfig from '../config/app.config';
import crypto from 'crypto';

const {
    JWT_ACCESS_SECRET_KEY,
    JWT_REFRESH_SECRET_KEY,
    JWT_ACCESS_EXPIRATION_TIME,
    JWT_REFRESH_EXPIRATION_TIME,
} = appConfig;

const signAccessToken = (user: User) => {
    const { id, email, role } = user; 
    return jwt.sign(
        { id, email, role },
        JWT_ACCESS_SECRET_KEY, 
        { expiresIn: JWT_ACCESS_EXPIRATION_TIME });
};

const verifyAccessToken = (token:string) => jwt.verify(token, JWT_ACCESS_SECRET_KEY);

const verifyRefreshToken = (token:string) => jwt.verify(token, JWT_REFRESH_SECRET_KEY);

const getPlainToken = (token: string) => token.replace('Bearer', '').trim();

const signRefreshToken = (user:User) => jwt.sign(
    { userId: user.id }, 
    JWT_REFRESH_SECRET_KEY, 
    { expiresIn: JWT_REFRESH_EXPIRATION_TIME });

const hashToken = (token:string) => crypto.createHash('sha512').update(token).digest('hex');

const signTokens = (user:User) => {
    const accessToken = signAccessToken(user);
    const refreshToken = signRefreshToken(user);

    return { accessToken, refreshToken };
};

export {
    signAccessToken,
    verifyAccessToken,
    verifyRefreshToken,
    getPlainToken,
    signRefreshToken,
    hashToken,
    signTokens
};