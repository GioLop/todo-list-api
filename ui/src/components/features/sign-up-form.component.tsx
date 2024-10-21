import { ChangeEvent, FC, FormEvent, useState } from "react";
import Input, { InputType } from "../core/input/input.component";
import AuthFormTemplate from "../templates/auth-form/auth-form-template.component";
import useFormErrors from "../../hooks/useFormErrors";
import { registerDto } from "../../dtos/auth.dto";


const SignUpForm:FC = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const { formErrors, setFormErrors, getInputError } = useFormErrors(registerDto, { name, email, password} );
    
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
        <AuthFormTemplate onSubmit={handleOnFormSubmit} submitText="Sign Up">
            <Input
                value={name}
                placeholder="name"
                onChange={(event) => { handleOnInputChange(event)(setName) }}
                error={getInputError('name')}/>
            <Input
                value={email}
                placeholder="email"
                onChange={(event) => { handleOnInputChange(event)(setEmail) }}
                error={getInputError('email')}/>
            <Input
                value={password}
                placeholder="password"
                type={InputType.Password}
                onChange={(event) => { handleOnInputChange(event)(setPassword)} }
                error={getInputError('password')}/>
        </AuthFormTemplate>
    );
};

export default SignUpForm;