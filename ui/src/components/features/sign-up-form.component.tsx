import { ChangeEvent, FC, useState } from "react";
import Input, { InputType } from "../core/input/input.component";
import AuthFormTemplate from "../templates/auth-form/auth-form-template.component";


const SignUpForm:FC = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const handleOnFormSubmit = () => {};

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
                onChange={(event) => { handleOnInputChange(event)(setName) }}/>
            <Input
                value={email}
                placeholder="email"
                onChange={(event) => { handleOnInputChange(event)(setEmail) }}/>
            <Input
                value={password}
                placeholder="password"
                type={InputType.Password}
                onChange={(event) => { handleOnInputChange(event)(setPassword)} }/>
            <Input
                value={confirmPassword}
                placeholder="confirm password"
                type={InputType.Password}
                onChange={(event) => { handleOnInputChange(event)(setConfirmPassword)} }/>
        </AuthFormTemplate>
    );
};

export default SignUpForm;