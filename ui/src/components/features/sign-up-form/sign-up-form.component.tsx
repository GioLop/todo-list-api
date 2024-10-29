import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import Input, { InputType } from "../../core/input/input.component";
import AuthFormTemplate from "../../templates/auth-form/auth-form-template.component";
import useFormErrors from "../../../hooks/useFormErrors";
import { registerDto } from "../../../dtos/auth.dto";
import useAuth from "../../../hooks/useAuth.hook";
import { httpPostRegister } from "../../../services/auth.service";
import { useNavigate } from "react-router-dom";


const SignUpForm:FC = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const { validateForm, getInputError } = useFormErrors(registerDto, { name, email, password} );
    const { 
        accessToken,
        addAccessToken,
        refreshToken,
        addRefreshToken
    } = useAuth();
    
    const navigate = useNavigate();

    const handleOnFormSubmit = async(event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { error } = validateForm();

        if (!error) {
            const res = await httpPostRegister({ name, email, password });
            addAccessToken(res?.data?.accessToken);
            addRefreshToken(res?.data?.refreshToken);
        }
    };
    
    const handleOnInputChange = (
            event: ChangeEvent<HTMLInputElement>
        ) => (
            setFn:React.Dispatch<React.SetStateAction<string>>
        ) => {
                setFn(event.target.value);
        };
    
    useEffect(() => {
        if (accessToken && refreshToken) {
            navigate('/', { replace: true });
        }
    }, [accessToken, refreshToken, navigate]); 

    return (
        <AuthFormTemplate onSubmit={handleOnFormSubmit} submitText="Sign Up">
            <Input
                value={name}
                placeholder="name*"
                onChange={(event) => { handleOnInputChange(event)(setName) }}
                error={getInputError('name')}/>
            <Input
                value={email}
                placeholder="email*"
                onChange={(event) => { handleOnInputChange(event)(setEmail) }}
                error={getInputError('email')}/>
            <Input
                value={password}
                placeholder="password*"
                type={InputType.Password}
                onChange={(event) => { handleOnInputChange(event)(setPassword)} }
                error={getInputError('password')}/>
        </AuthFormTemplate>
    );
};

export default SignUpForm;