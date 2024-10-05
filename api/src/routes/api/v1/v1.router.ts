import { Router } from 'express';
import registerRouter from './register/register.router';

const v1Router = Router();

v1Router.use('/register', registerRouter);

export default v1Router;