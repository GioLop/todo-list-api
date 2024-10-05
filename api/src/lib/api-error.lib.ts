import Boom from '@hapi/boom';

class CustomError {
    badRequest = (error:Error) => Boom.badRequest(error);
    conflict = (message:string) => Boom.conflict(message);
};

const apiError = new CustomError();

export default apiError;