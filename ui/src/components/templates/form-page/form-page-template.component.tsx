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
        <header className='header'>{ header }</header>
        <main className='main'>
            <div className='left'>
                <h1>{ title }</h1>
            </div>
            <div className='right'>
                <p>{ copy }</p>
                { form }
                <p className="align-right">{ moreOptions }</p>
            </div>
        </main>
    </>
);

export default FormPageTemplate;