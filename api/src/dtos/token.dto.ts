import Joi from 'joi';

const token = Joi.string();

const refreshToken = Joi.object({
    refreshToken: token.required()
});

export {
    refreshToken
};