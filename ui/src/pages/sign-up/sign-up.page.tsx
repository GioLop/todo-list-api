import { FC } from "react";
import SignUpForm from "../../components/features/sign-up-form.component";
import FormPageTemplate from "../../components/templates/form-page-template.component";

const SignUp:FC = () => {
    return (
        <FormPageTemplate
            header='Create an account in your to-do list app'
            title='Sign Up'
            copy='Let’s get started filling up this basic data.'
            form={<SignUpForm onSubmit={() => {}}/>}
            moreOptions='Already have an account? Login'/>
    )
};

export default SignUp;