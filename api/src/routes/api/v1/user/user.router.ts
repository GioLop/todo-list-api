import { Router } from 'express';
import authorize from '../../../../middlewares/authorize.middleware';
import { httpUserGetHandler } from './user.handler';

const userRouter = Router();

userRouter.get(
    '/',
    authorize,
    httpUserGetHandler
);

export default userRouter;