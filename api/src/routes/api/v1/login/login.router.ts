import { Router } from 'express';
import validateRequest from '../../../../middlewares/validate-request.middleware';
import { userLogin } from '../../../../dtos/user.dto';
import { httpLoginPostHandler } from './login.handler';

const loginRouter = Router();

loginRouter.post(
    '/',
    validateRequest(userLogin, 'body'),
    httpLoginPostHandler
);

export default loginRouter;