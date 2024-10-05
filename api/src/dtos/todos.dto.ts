import Joi from 'joi';

const title = Joi.string();
const description = Joi.string();

const createTodo = Joi.object({
    title: title.required(),
    description: description.required()
});

export {
    createTodo
};