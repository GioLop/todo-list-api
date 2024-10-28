import { Router } from 'express';
import registerRouter from './register/register.router';
import loginRouter from './login/login.router';
import todosRouter from './todos/todos.router';
import refreshTokenRouter from './refresh-token/refreshToken.router';
import revokeTokensRouter from './revoke-token/revokeToken.router';
import userRouter from './user/user.router';

const v1Router = Router();

v1Router.use('/register', registerRouter);
v1Router.use('/login', loginRouter);
v1Router.use('/user', userRouter);
v1Router.use('/todos', todosRouter);
v1Router.use('/refresh-token', refreshTokenRouter);
v1Router.use('/revoke-token', revokeTokensRouter);

export default v1Router;