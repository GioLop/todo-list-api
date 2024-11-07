import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import Input, { InputType } from "../../core/input/input.component";
import AuthFormTemplate from "../../templates/auth-form/auth-form-template.component";
import useFormErrors from "../../../hooks/useFormErrors";
import { registerDto } from "../../../dtos/auth.dto";
import useAuth from "../../../hooks/useAuth.hook";
import { httpPostRegister } from "../../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import ErrorMessage from "../../core/error-message/error-message.component";


const SignUpForm:FC = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ registeError, setRegisteError ] = useState<string | null>(null);
    const { validateForm, getInputError } = useFormErrors(registerDto, { name, email, password} );
    
    const auth = useAuth();
    
    const navigate = useNavigate();

    const handleOnFormSubmit = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { error } = validateForm();

        if (!error) {
            try {
                const res = await httpPostRegister({ name, email, password });
                setRegisteError(null);
                auth?.addAccessToken(res?.data?.accessToken);
                auth?.addRefreshToken(res?.data?.refreshToken);
            } catch (error) {
                console.log(error);
                const { response } = error as AxiosError;
                setRegisteError((response?.data as { message:string }).message);
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
                registeError && <ErrorMessage message={registeError}/>
            }
            
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
        </>
        
    );
};

export default SignUpForm;