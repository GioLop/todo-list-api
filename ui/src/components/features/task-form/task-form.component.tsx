import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import Input, { InputVariant } from "../../core/input/input.component";
import Button, { ButtonType } from "../../core/button/button.component";
import './task-form.component.scss';
import useFormErrors from "../../../hooks/useFormErrors";
import { addTaskDto } from "../../../dtos/task.dto";

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
    const { validateForm, getInputError } = useFormErrors(addTaskDto, { title, description });

    const handleOnInputChange = (
        setCallback:Dispatch<SetStateAction<string>>) => 
            (event:ChangeEvent<HTMLInputElement>) => { setCallback(event.target.value); };

    const handleOnFormSubmit:React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const { error } = validateForm();

        if (!error) {
            onSubmit({title, description});
            setTitle('');
            setDescription('');
        }
    };

    const handleOnCancel = () => {
        setTitle('');
        setDescription('');
        onCancel();
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
                        variant={InputVariant.Enlarged}
                        error={getInputError('title')}/>
                    <Input
                        value={description}
                        placeholder="Description*"
                        onChange={handleOnInputChange(setDescription)}
                        error={getInputError('description')}/>
                </fieldset>
                <div className='task-form__buttons'>
                    <Button value="Cancel" onClick={handleOnCancel}/>
                    <Button value="Save" type={ButtonType.Sumbit}/>
                </div>
            </form>
        </>
    )
};

export default TaskForm;