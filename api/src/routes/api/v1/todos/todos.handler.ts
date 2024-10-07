import { NextFunction, Request, Response } from 'express';
import { getPlainToken, verifyToken } from '../../../../lib/token.lib';
import { CreateTodo, UpdateTodo } from '../../../../types/todo-type';
import { UserToken } from '../../../../types/user.type';
import { createTask, deleteTask, getTaskById, getTasksByUserId, updateTask } from '../../../../models/task.model';
import apiError from '../../../../lib/api-error.lib';

const httpTodosPostHandler = async (req:Request, res: Response, next:NextFunction) => {
    const { authorization } = req.headers;
    const todo = req.body as CreateTodo;
    
    try {
        const token = getPlainToken((authorization as string));
        const user = verifyToken(token) as UserToken;
        const newTodo = await createTask(user.id, todo);
        
        res.json({ ...newTodo });
    } catch (error) {
       next(error); 
    }
};

const httpTodosPutHandler = async (req:Request, res: Response, next:NextFunction) => {
    const { authorization } = req.headers;
    const updates = req.body as UpdateTodo;
    const taskId = Number(req.params.taskId);

    if (Object.keys(updates).length <= 0)
        return next(apiError.badRequest(new Error('Missing fields to update.')));

    try {
        const token = getPlainToken((authorization as string));
        const user = verifyToken(token) as UserToken;
        
        const taskToUpdate = await getTaskById(taskId);
        
        if (!taskToUpdate)
            return  next(apiError.notFound(`Task with id ${taskId} doesn't exist.`));
        
        if (taskToUpdate.userId !== user.id)
            return  next(apiError.forbidden('You are not allowed to perform this action.'));

        const taskUpdated = await updateTask(taskId, updates);

        res.json({ ...taskUpdated });
    } catch (error) {
       next(error); 
    }
};

const httpTodosDeleteHandler = async (req:Request, res: Response, next:NextFunction) => {
    const taskId = Number(req.params.taskId);
    const { authorization } = req.headers;

    try {
        const token = getPlainToken((authorization as string));
        const user = verifyToken(token) as UserToken;

        const taskToDelete = await getTaskById(taskId);
        
        if (!taskToDelete)
            return  next(apiError.notFound(`Task with id ${taskId} doesn't exist.`));

        if (taskToDelete.userId !== user.id)
            return  next(apiError.forbidden('You are not allowed to perform this action.'));

        await deleteTask(taskId);

        res.status(204);
    } catch (error) {
        next(error);
    }
};

const httpTodosGetHandler = async (req:Request, res:Response, next:NextFunction) => {
    const page  = Number(req.query.page);
    const limit = Number(req.query.limit);
    const { authorization } = req.headers;

    const skip = (page - 1) * limit;
    const take = limit;

    try {
        const token = getPlainToken((authorization as string));
        const user = verifyToken(token) as UserToken;

        const todos = await getTasksByUserId(user.id, skip, take);

        res.json({ data: [...todos], page, limit, total: todos.length });
    } catch (error) {
        next(error);  
    }
};

export {
    httpTodosPostHandler,
    httpTodosPutHandler,
    httpTodosDeleteHandler,
    httpTodosGetHandler
};