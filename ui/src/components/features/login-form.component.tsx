import { ChangeEvent, FC, FormEvent, useState } from "react";
import Input, { InputType } from "../core/input/input.component";
import AuthFormTemplate from "../templates/auth-form/auth-form-template.component";
import { loginDto } from "../../dtos/auth.dto";
import useFormErrors from "../../hooks/useFormErrors";


const LoginForm:FC = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const { formErrors, setFormErrors, getInputError } = useFormErrors(loginDto, {email, password});
    
    const handleOnFormSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormErrors();
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
                error={getInputError('email')}/>
            <Input
                value={password}
                placeholder="password"
                type={InputType.Password}
                onChange={(event) => { handleOnInputChange(event)(setPassword)}}
                error={getInputError('password')}/>
        </AuthFormTemplate>
    );
};

export default LoginForm;