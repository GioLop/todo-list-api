import { ChangeEvent, FC, FormEvent, useState } from "react";
import Input, { InputType } from "../core/input/input.component";
import AuthFormTemplate from "../templates/auth-form/auth-form-template.component";
import { loginDto } from "../../dtos/auth.dto";
import { ErrorList, getInputError } from "../../lib/form.lib";


const LoginForm:FC = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ formErrors, setformErrors ] = useState<ErrorList>([]);
    
    const handleOnFormSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { error } = loginDto.validate({
            email,
            password
        }, { abortEarly: false });
    
        if (error) {
            setformErrors(error?.details);
        } else {
            setformErrors([]);
        }
    };

    const handleOnInputChange = (
            event: ChangeEvent<HTMLInputElement>
        ) => (
            setFn:React.Dispatch<React.SetStateAction<string>>
        ) => {
            setFn(event.target.value);
        };
    
    return (
        <AuthFormTemplate onSubmit={handleOnFormSubmit} submitText="Login">
            <Input
                value={email}
                placeholder="email"
                onChange={(event) => { handleOnInputChange(event)(setEmail) }}
                error={getInputError('email', formErrors)}/>
            <Input
                value={password}
                placeholder="password"
                type={InputType.Password}
                onChange={(event) => { handleOnInputChange(event)(setPassword)}}
                error={getInputError('password', formErrors)}/>
        </AuthFormTemplate>
    );
};

export default LoginForm;