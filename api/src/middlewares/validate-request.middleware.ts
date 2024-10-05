import { NextFunction, Request, Response } from 'express';
import { ObjectSchema } from 'joi';
import apiError from '../lib/api-error.lib';

type requestProps = 'body' | 'params' | 'headers' | 'query';

const validateRequest = (schema: ObjectSchema, property: requestProps) => {
    return (req: Request, _res: Response, next: NextFunction) => {
        const { error } = schema.validate(req[property], { abortEarly: false });

        if (!error) return next();
        
        next(apiError.badRequest(error));
    };
};

export default validateRequest;