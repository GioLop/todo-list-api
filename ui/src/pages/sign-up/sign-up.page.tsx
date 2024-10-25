import { FC } from "react";
import FormPageTemplate from "../../components/templates/form-page/form-page-template.component";
import Link from "../../components/core/link/link.component";
import SignUpForm from "../../components/features/sign-up-form.component";
import Header from "../../components/core/header/header.component";

const LoginMessage = () => (
    <>Already have an account? <Link href="/login">Login</Link></>
);

const SignUpPage:FC = () => {
    const header = <Header message={<>Create an account in <strong>your to-do list app</strong></>}/>

    return (
        <FormPageTemplate
            header={header}
            title='Sign Up'
            copy='Let’s get started filling up this basic data.'
            form={<SignUpForm/>}
            moreOptions={<LoginMessage/>}/>
    );
};

export default SignUpPage; 