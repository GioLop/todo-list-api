import Joi from 'joi';

const title = Joi.string();
const description = Joi.string();
const status = Joi.string();

const FIELDS = {
    TITLE: 'title',
    DESCRIPTION: 'description',
    STATUS: 'status'
};

const getMessages = (field:string) => ({
    'string.base': `"${field}" should be a type of string`,
    'string.empty': `"${field}" must contain a value`,
    'any.required': `"${field}" is a required field`
});

const addTaskDto = Joi.object({
    title: title.required().messages(getMessages(FIELDS.TITLE)),
    description: description.required().messages(getMessages(FIELDS.DESCRIPTION)),
});

const editTaskDto = Joi.object({
    title: title.messages(getMessages(FIELDS.TITLE)),
    description: description.messages(getMessages(FIELDS.DESCRIPTION)),
    status: status.messages(getMessages(FIELDS.STATUS))
});

export {
    addTaskDto,
    editTaskDto
};