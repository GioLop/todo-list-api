import { FC } from "react";
import FormPageTemplate from "../../components/templates/form-page/form-page-template.component";
import Link from "../../components/core/link/link.component";
import LoginForm from "../../components/features/login-form/login-form.component";
import Header from "../../components/core/header/header.component";

const SignUpMessage = () => (
    <>Don’t have an account? <Link href="/sign-up">Sign Up</Link></>
);

const LoginPage:FC = () => {
    const header = <div>Welcome to <strong>your to-do list app</strong></div>;
    
    return (
        <FormPageTemplate
            header={header}
            title='Login'
            copy='Enter your email and your password.'
            form={<LoginForm/>}
            moreOptions={<SignUpMessage/>}/>
    );
};

export default LoginPage;