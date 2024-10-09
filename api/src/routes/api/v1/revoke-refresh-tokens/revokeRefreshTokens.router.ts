import { Router } from 'express';

const revokeRefreshTokensRouter = Router();

revokeRefreshTokensRouter.post('/');

export default revokeRefreshTokensRouter;