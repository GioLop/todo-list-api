import Joi from 'joi';
import { tlds } from '@hapi/tlds';

const title = Joi.string();
const description = Joi.string().email({ tlds: { allow: tlds } });
// const status = Joi.string();

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

export {
    addTaskDto
};