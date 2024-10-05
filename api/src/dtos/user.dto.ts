import Joi from 'joi';

const name = Joi.string();
const email = Joi.string().email();
const password = Joi.string();

const FIELDS = {
    NAME: 'name',
    EMAIL: 'email',
    PASSWORD: 'password'
};

const getMessages = (field:string) => ({
    'string.base': `"${ field }" should be a type of string`,
    'string.empty': `"${ field }" must contain value`,
    'date.base': `"${ field }" must be a valid date`,
    'any.required': `"${ field }" is a required field`
});

const userRegistration = Joi.object({
    name: name.required().messages(getMessages(FIELDS.NAME)),
    email: email.required().messages(getMessages(FIELDS.EMAIL)),
    password: password.required().messages(getMessages(FIELDS.PASSWORD))
});

export {
    userRegistration
};