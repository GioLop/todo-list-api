import Joi from 'joi';
import { tlds } from '@hapi/tlds';

const name = Joi.string();
const email = Joi.string().email({ tlds: { allow: tlds } });
const password = Joi.string();

const FIELDS = {
    NAME: 'name',
    EMAIL: 'email',
    PASSWORD: 'password'
};

const getMessages = (field:string) => ({
    'string.base': `"${field}" should be a type of string`,
    'string.empty': `"${field}" must contain a value`,
    'any.required': `"${field}" is a required field`
});

const registerDto = Joi.object({
    name: name.required().messages(getMessages(FIELDS.NAME)),
    email: email.required().messages(getMessages(FIELDS.EMAIL)),
    password: password.required().messages(getMessages(FIELDS.PASSWORD))
});

const loginDto = Joi.object({
    email: email.required().messages(getMessages(FIELDS.EMAIL)),
    password: password.required().messages(getMessages(FIELDS.PASSWORD))
});

export {
    registerDto,
    loginDto
};