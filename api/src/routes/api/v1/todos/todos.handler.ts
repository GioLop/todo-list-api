import { NextFunction, Request, Response } from 'express';
import { getPlainToken, verifyToken } from '../../../../lib/token.lib';
import { CreateTodo } from '../../../../types/todo-type';
import { UserToken } from '../../../../types/user.type';
import { createTask } from '../../../../models/task.model';

const httpTodosPostHandler = async (req:Request, res: Response, next:NextFunction) => {
    try {
        const { authorization } = req.headers;
        const todo = req.body as CreateTodo;
        const token = getPlainToken((authorization as string));

        const user = verifyToken(token) as UserToken;
        const newTodo = await createTask(user.id, todo);

        res.json({ ...newTodo }); 
    } catch (error) {
       next(error); 
    }
};


export {
    httpTodosPostHandler
};