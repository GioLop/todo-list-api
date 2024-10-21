import { FC } from "react";
import FormPageTemplate from "../../components/templates/form-page/form-page-template.component";
import Link from "../../components/core/link/link.component";
import LoginForm from "../../components/features/login-form.component";

const LoginHeader = () => (
    <>Welcome to <strong>your to-do list app</strong></>
);

const SignUpMessage = () => (
    <>Don’t have an account? <Link href="/sign-up">Sign Up</Link></>
);

const LoginPage:FC = () => {
    return (
        <FormPageTemplate
            header={<LoginHeader/>}
            title='Login'
            copy='Enter your email and your password.'
            form={<LoginForm/>}
            moreOptions={<SignUpMessage/>}/>
    );
};

export default LoginPage;