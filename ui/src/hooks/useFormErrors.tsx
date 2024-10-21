import { useState } from "react";
import Joi from "joi";

type ErrorList = Array<Joi.ValidationErrorItem>;

const useFormErrors = (dataSchema:Joi.ObjectSchema, dataValue: Record<string, string>) => {
    const [ formErrors, setFormErrors ] = useState<ErrorList>([]);
    
    const validateForm = () => {
        const { error } = dataSchema.validate(dataValue, { abortEarly: false });
    
        if (error) {
            setFormErrors(error?.details);
            return { error }
        }

        setFormErrors([]);
        return { error: null };
    };

    const getInputError = (field:string) => formErrors.find(error => error.path.includes(field))?.message;

    return {
        formErrors,
        validateForm,
        getInputError
    }
};

export default useFormErrors;