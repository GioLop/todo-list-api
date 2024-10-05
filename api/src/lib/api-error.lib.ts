import Boom from '@hapi/boom';

class CustomError {
    badRequest = (error:Error) => Boom.badRequest(error);
    conflict = (message:string) => Boom.conflict(message);
    notFound = (message:string) => Boom.notFound(message); 
    unAuthorized = (message:string) => Boom.unauthorized(message);
};

const apiError = new CustomError();

export default apiError;