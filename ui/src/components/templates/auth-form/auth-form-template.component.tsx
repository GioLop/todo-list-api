import { FC, ReactNode } from 'react';
import Button, { ButtonType } from '../../core/button/button.component';
import './auth-form-template.component.scss';

type  AuthFormTemplateType = {
    onSubmit: () => void,
    children: ReactNode,
    submitText: string
};

const AuthFormTemplate:FC<AuthFormTemplateType> = ({ onSubmit, children, submitText }) => (
    <form onSubmit={onSubmit} className='auth-form'>
        <fieldset className='auth-form__fieldset'>
            { children }
        </fieldset>
        <div className='auth-form__button-wrapper'>
            <Button value={submitText} type={ButtonType.Sumbit}/>
        </div>
    </form>
);

export default AuthFormTemplate;