import { Router } from 'express';
import validateRequest from '../../../../middlewares/validate-request.middleware';
import { userRegistration } from '../../../../dtos/user.dto';
import { httpRegisterPostHandler } from './register.handler';
const registerRouter = Router();

registerRouter.post(
    '/',
    validateRequest(userRegistration, 'body'),
    httpRegisterPostHandler
);

export default registerRouter;