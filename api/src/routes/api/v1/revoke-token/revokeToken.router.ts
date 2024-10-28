import { Router } from 'express';
import validateRequest from '../../../../middlewares/validate-request.middleware';
import { refreshToken } from '../../../../dtos/token.dto';
import { revokeTokenPostHandler } from './revokeTokens.handler';

const revokeTokensRouter = Router();

revokeTokensRouter.post(
    '/',
    validateRequest(refreshToken, 'body'),
    revokeTokenPostHandler
);

export default revokeTokensRouter;