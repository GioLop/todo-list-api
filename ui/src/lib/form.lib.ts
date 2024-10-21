import Joi from "joi";

export type ErrorList = Array<Joi.ValidationErrorItem>;

const getInputError = (field:string, errors:ErrorList) => errors.find(error => error.path.includes(field))?.message;

export {
    getInputError
};