import { Router } from 'express';
import registerRouter from './register/register.router';
import loginRouter from './login/login.router';
import todosRouter from './todos/todos.router';

const v1Router = Router();

v1Router.use('/register', registerRouter);
v1Router.use('/login', loginRouter);
v1Router.use('/todos', todosRouter);

export default v1Router;