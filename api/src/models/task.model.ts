import prisma from '../db/prisma.db';
import { CreateTodo } from '../types/todo-type';

const createTask = async (userId:number, task:CreateTodo) => {
    const { title, description } = task;
    
    try {
        const newTask =  await prisma.task.create({ data: {
            title: title,
            description: description,
            userId: userId,
            taskState: 'PENDING'
        }});

        return newTask;
    } catch (error) {
        throw new Error(`Error while creating task, title: ${title}, description: ${description}, ${(error as Error).message}`);
    }
};

export {
    createTask
};