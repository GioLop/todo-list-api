import { FC } from "react";
import FormPageTemplate from "../../components/templates/form-page/form-page-template.component";
import Link from "../../components/core/link/link.component";
import SignUpForm from "../../components/features/sign-up-form.component";

const SignUpHeader = () => (
    <>Create an account in <strong>your to-do list app</strong></>
);

const LoginMessage = () => (
    <>Already have an account? <Link href="/login">Login</Link></>
);

const SignUpPage:FC = () => {
    return (
        <FormPageTemplate
            header={<SignUpHeader/>}
            title='Sign Up'
            copy='Let’s get started filling up this basic data.'
            form={<SignUpForm/>}
            moreOptions={<LoginMessage/>}/>
    );
};

export default SignUpPage;