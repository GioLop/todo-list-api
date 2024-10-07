import { Router } from 'express';
import { 
    httpTodosDeleteHandler,
    httpTodosPostHandler,
    httpTodosPutHandler,
    httpTodosGetHandler
} from './todos.handler';
import validateRequest from '../../../../middlewares/validate-request.middleware';
import { createTodo, getTodos, updateTodo } from '../../../../dtos/todos.dto';
import authorize from '../../../../middlewares/authorize.middleware';

const todosRouter = Router();

todosRouter.post(
    '/',
    authorize,
    validateRequest(createTodo, 'body'),
    httpTodosPostHandler
);

todosRouter.put(
    '/:taskId',
    authorize,
    validateRequest(updateTodo, 'body'),
    httpTodosPutHandler
);

todosRouter.delete(
    '/:taskId',
    authorize,
    httpTodosDeleteHandler
);

todosRouter.get(
    '/',
    authorize,
    validateRequest(getTodos, 'query'),
    httpTodosGetHandler
);

export default todosRouter;