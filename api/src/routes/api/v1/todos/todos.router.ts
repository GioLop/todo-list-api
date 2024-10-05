import { Router } from 'express';
import { httpTodosPostHandler } from './todos.handler';
import validateRequest from '../../../../middlewares/validate-request.middleware';
import { createTodo } from '../../../../dtos/todos.dto';
import authorize from '../../../../middlewares/authorize.middleware';

const todosRouter = Router();

todosRouter.post(
    '/',
    authorize,
    validateRequest(createTodo, 'body'),
    httpTodosPostHandler
);

export default todosRouter;