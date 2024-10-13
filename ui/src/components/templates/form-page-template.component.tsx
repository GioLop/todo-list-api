import { FC, ReactNode } from "react";

type FormPageTemplateType = {
    header: string | ReactNode,
    title: string | ReactNode,
    copy: string | ReactNode,
    form: string | ReactNode,
    moreOptions: string | ReactNode,
};

const FormPageTemplate:FC<FormPageTemplateType> = ({
    header,
    title,
    copy,
    form,
    moreOptions
}) => (
    <>
        <div>{ header }</div>
        <h1>{ title }</h1>
        <p>{ copy }</p>
        { form }
        <p>{ moreOptions }</p>
    </>
);

export default FormPageTemplate;