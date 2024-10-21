import { useState } from "react";
import Joi from "joi";

type ErrorList = Array<Joi.ValidationErrorItem>;

const useFormErrors = (dataSchema:Joi.ObjectSchema, dataValue: Record<string, string>) => {
    const [ formErrors, _setFormErrors ] = useState<ErrorList>([]);
    
    const setFormErrors = () => {
        const { error } = dataSchema.validate(dataValue, { abortEarly: false });
    
        if (error) {
            _setFormErrors(error?.details);
            return true
        }

        _setFormErrors([]);
        return false
    };

    const getInputError = (field:string) => formErrors.find(error => error.path.includes(field))?.message;

    return {
        formErrors,
        setFormErrors,
        getInputError
    }
};

export default useFormErrors;