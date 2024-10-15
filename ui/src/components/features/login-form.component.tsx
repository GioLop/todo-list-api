import { ChangeEvent, FC, useState } from "react";
import Input, { InputType } from "../core/input/input.component";
import AuthFormTemplate from "../templates/auth-form/auth-form-template.component";


const LoginForm:FC = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    
    const handleOnFormSubmit = () => {};

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
                onChange={(event) => { handleOnInputChange(event)(setEmail) }}/>
            <Input
                value={password}
                placeholder="password"
                type={InputType.Password}
                onChange={(event) => { handleOnInputChange(event)(setPassword)} }/>
        </AuthFormTemplate>
    );
};

export default LoginForm;