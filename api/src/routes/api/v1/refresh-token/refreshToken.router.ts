import { Router } from 'express';
import { httpRefreshTokenPostHandler } from './refreshToken.handler';
import validateRequest from '../../../../middlewares/validate-request.middleware';
import { refreshToken } from '../../../../dtos/token.dto';

const refreshTokenRouter = Router();

refreshTokenRouter.post(
    '/',
    validateRequest(refreshToken, 'body'),
    httpRefreshTokenPostHandler
);

export default refreshTokenRouter;