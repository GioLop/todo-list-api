import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";
import Input, { InputVariant } from "../../core/input/input.component";
import Button, { ButtonType, ButtonVariant } from "../../core/button/button.component";
import './task-form.component.scss';
import useFormErrors from "../../../hooks/useFormErrors";
import { addTaskDto, editTaskDto } from "../../../dtos/task.dto";

enum TaskFormVariants {
    Edit = 'Edit',
    Add = 'Add New'
};

type TaskFormType = {
    type?: TaskFormVariants,
    onSubmit: ({ title, description }: {title:string, description:string}) => void,
    onCancel: () => void,
    dataToEdit?: { title:string, description:string }
};

const TaskForm:FC<TaskFormType> = ({
    type = TaskFormVariants.Add,
    onSubmit,
    onCancel,
    dataToEdit
}) => {
    const dto = type === TaskFormVariants.Add ? addTaskDto : editTaskDto;
    
    const [title, setTitle] = useState(dataToEdit?.title || '');
    const [description, setDescription] = useState(dataToEdit?.description || '');
    const { validateForm, getInputError } = useFormErrors(dto, { title, description });

    const handleOnInputChange = (
        setCallback:Dispatch<SetStateAction<string>>) => 
            (event:ChangeEvent<HTMLInputElement>) => { setCallback(event.target.value); };

    const handleOnFormSubmit:React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const { error } = validateForm();

        if (!error) {
            onSubmit({ title, description });
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
        <div className='task-form'>
            <h3 className="task-form__type">{type} Task</h3>
            <form onSubmit={handleOnFormSubmit} className='task-form__form'>
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
                    <Button value="Cancel"
                        variant={ButtonVariant.Secondary}
                        onClick={handleOnCancel}/>
                    <Button value="Save" type={ButtonType.Sumbit}/>
                </div>
            </form>
        </div>
    )
};

export {
    TaskFormVariants
};

export default TaskForm;