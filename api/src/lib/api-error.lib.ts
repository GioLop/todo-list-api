import Boom from '@hapi/boom';

class ApiError {
    badRequest = (message:string) => Boom.badRequest(message);
    conflict = (message:string) => Boom.conflict(message);
    notFound = (message:string) => Boom.notFound(message); 
    unAuthorized = (message:string) => Boom.unauthorized(message);
    forbidden = (message:string) => Boom.forbidden(message); 
};

const apiError = new ApiError();

export default apiError;