import { Request } from 'express';
import { UserToken } from './user.type';

interface UserRegistration {
    name: string,
    email: string,
    password: string
};

interface UserLogin {
    email: string,
    password: string
}

interface AuthHeader {
    authorization: string
}

interface AuthRequest extends Request {
    user: UserToken
}

export {
    UserRegistration,
    UserLogin,
    AuthHeader,
    AuthRequest
};