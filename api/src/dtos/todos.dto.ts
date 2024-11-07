import Joi from 'joi';

const title = Joi.string();
const description = Joi.string();
const taskState = Joi.string();

const page = Joi.string();
const limit = Joi.string();
const filter = Joi.string();

const createTodo = Joi.object({
    title: title.required(),
    description: description.required()
});

const updateTodo = Joi.object({
    title: title.optional(),
    description: description.optional(),
    taskState: taskState.optional(),
});

const getTodos = Joi.object({
    page: page.required(),
    limit: limit.required(),
    filter: filter.valid('PENDING', 'IN_PROGRESS', 'DONE').optional()
});

export {
    createTodo,
    updateTodo,
    getTodos
};