import { ChangeEvent, FC, useState } from "react";
import Button, { ButtonType } from "../core/button/button.component";
import Input, { InputType } from "../core/input/input.component";

type SignUpFormType = {
    onSubmit: () => void
};

const SignUpForm:FC<SignUpFormType> = ({
    onSubmit
}) => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const handleOnFormSubmit = () => {
        onSubmit();
    };

    const handleOnInputChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => (
        setFn:React.Dispatch<React.SetStateAction<string>>
    ) => {
        setFn(event.target.value);
    };

    return (
        <form onSubmit={handleOnFormSubmit}>
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
            <Button value="Sign Up" type={ButtonType.Sumbit}/>
        </form>
    );
};

export default SignUpForm;