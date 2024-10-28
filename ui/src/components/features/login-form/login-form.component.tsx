import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import Input, { InputType } from "../../core/input/input.component";
import AuthFormTemplate from "../../templates/auth-form/auth-form-template.component";
import { loginDto } from "../../../dtos/auth.dto";
import useFormErrors from "../../../hooks/useFormErrors";
import { httpPostLogin } from "../../../services/auth.service";
import useAuth from "../../../hooks/useAuth.hook";
import { useNavigate } from "react-router-dom";


const LoginForm:FC = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const { validateForm, getInputError } = useFormErrors(loginDto, { email, password });
    const { 
        accessToken,
        addAccessToken,
        refreshToken,
        addRefreshToken
    } = useAuth();
    
    const navigate = useNavigate();
    
    const handleOnFormSubmit = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { error } = validateForm();

        if (!error) {
            const res = await httpPostLogin({ email, password });
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
        <AuthFormTemplate onSubmit={handleOnFormSubmit} submitText="Login">
            <Input
                value={email}
                placeholder="email*"
                onChange={(event) => { handleOnInputChange(event)(setEmail) }}
                error={getInputError('email')}/>
            <Input
                value={password}
                placeholder="password*"
                type={InputType.Password}
                onChange={(event) => { handleOnInputChange(event)(setPassword)}}
                error={getInputError('password')}/>
        </AuthFormTemplate>
    );
};

export default LoginForm;