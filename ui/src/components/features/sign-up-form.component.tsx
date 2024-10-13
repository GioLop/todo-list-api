import { useState } from "react";
import Button, { ButtonType } from "../core/button/button.component";
import Input, { InputType } from "../core/input/input.component";

type SignUpFormType = {
    onSubmit: () => void
};

const SignUpForm = ({
    onSubmit
}:SignUpFormType) => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const handleOnSubmit = () => {
        onSubmit();
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <Input
                value={name}
                placeholder="name"/>
            <Input
                value={email}
                placeholder="email"/>
            <Input
                value={password}
                placeholder="password"
                type={InputType.Password}/>
            <Input
                value={confirmPassword}
                placeholder="confirm password"
                type={InputType.Password}/>
            <Button value="Sign Up" type={ButtonType.Sumbit}/>
        </form>
    );
};

export default SignUpForm;