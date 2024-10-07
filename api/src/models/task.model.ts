import prisma from '../db/prisma.db';
import { CreateTodo, UpdateTodo } from '../types/todo-type';

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

const getTaskById = async (taskId:number) => {
    try {
        const task = await prisma.task.findUnique({
            where: {
                id: taskId
            }
        });

        return task;
    } catch (error) {
        throw new Error(`Error while getting task by id ${taskId}: ${(error as Error).message}`);
    }
};

const updateTask = async (taskId:number, updates:UpdateTodo) => {
    try {
        const taskUpdated = await prisma.task.update({
            data: {
                ...updates
            },
            where:{
                id: taskId
            }
        });

        return taskUpdated;
    } catch (error) {
        throw new Error(`Error while updating task id ${taskId}: ${(error as Error).message}`);
    }
};

const deleteTask = async (taskId:number) => {
    try {
        const taskDeleted = prisma.task.delete({
            where: {
                id: taskId
            }
        });

        return taskDeleted;
    } catch (error) {
        throw new Error(`Error while deleting task id ${taskId}: ${(error as Error).message}`);
    }
};

const getTasksByUserId = async (userId:number, skip:number, take:number) => {
    try {
        const tasks = await prisma.task.findMany({
            where: {
                userId: userId
            },
            skip,
            take
        });

        return tasks;
    } catch (error) {
        throw new Error(`Error while getting tasks for user ${userId}: ${(error as Error).message}`);
    }
};

export {
    createTask,
    getTaskById,
    updateTask,
    deleteTask,
    getTasksByUserId,
};