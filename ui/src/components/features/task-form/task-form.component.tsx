import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import Input, { InputVariant } from "../../core/input/input.component";
import Button, { ButtonType } from "../../core/button/button.component";
import './task-form.component.scss';

enum TaskFormVariants {
    Edit = 'Edit',
    Add = 'Add'
};

type TaskFormType = {
    type?: TaskFormVariants,
    onSubmit: ({ title, description }: {title:string, description:string}) => void,
    onCancel: () => void
};

const TaskForm:FC<TaskFormType> = ({
    type = TaskFormVariants.Add,
    onSubmit,
    onCancel
}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleOnInputChange = (
        setCallback:Dispatch<SetStateAction<string>>) => 
            (event:ChangeEvent<HTMLInputElement>) => { setCallback(event.target.value); };

    const handleOnFormSubmit:React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        onSubmit({title, description});
    };

    return (
        <>
            <h3 className="task-form-type">{type} New Task</h3>
            <form onSubmit={handleOnFormSubmit} className='task-form'>
                <fieldset className='task-form__field-set'>
                    <Input
                        value={title}
                        placeholder="Title*"
                        onChange={handleOnInputChange(setTitle)}
                        variant={InputVariant.Enlarged}/>
                    <Input
                        value={description}
                        placeholder="Description*"
                        onChange={handleOnInputChange(setDescription)}/>
                </fieldset>
                <div className='task-form__buttons'>
                    <Button value="Cancel" onClick={onCancel}/>
                    <Button value="Save" type={ButtonType.Sumbit}/>
                </div>
            </form>
        </>
    )
};

export default TaskForm;