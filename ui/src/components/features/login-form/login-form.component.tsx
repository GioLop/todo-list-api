import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import Input, { InputType } from "../../core/input/input.component";
import AuthFormTemplate from "../../templates/auth-form/auth-form-template.component";
import { loginDto } from "../../../dtos/auth.dto";
import useFormErrors from "../../../hooks/useFormErrors";
import { httpPostLogin } from "../../../services/auth.service";
import useAuth from "../../../hooks/useAuth.hook";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import ErrorMessage from "../../core/error-message/error-message.component";


const LoginForm:FC = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loginError, setLoginError ] = useState<string | null>(null);
    const { validateForm, getInputError } = useFormErrors(loginDto, { email, password });
    
    const auth = useAuth();
    
    const navigate = useNavigate();
    
    const handleOnFormSubmit = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { error } = validateForm();

        if (!error) {
            try {
                const res = await httpPostLogin({ email, password });
                setLoginError(null);
                auth?.addAccessToken(res?.data?.accessToken);
                auth?.addRefreshToken(res?.data?.refreshToken);
            } catch (error) {
                const { response } = error as AxiosError;
                setLoginError((response?.data as { message:string }).message as string);
            }
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
        if (auth?.accessToken && auth?.refreshToken) {
            navigate('/', { replace: true });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth]);

    return (
        <>  
            {
                loginError && <ErrorMessage message={loginError}/>
            }
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
        </>
        
    );
};

export default LoginForm;