import { FC, useState } from "react";
import Input from "../../core/input/input.component";
import Button, { ButtonType } from "../../core/button/button.component";
import './task-form.component.scss';

type TaskFormType = {
    //taskToEdit?: unknown,
    onSubmit: () => void,
    onCancel: () => void
};

const TaskForm:FC<TaskFormType> = ({
    onSubmit,
    onCancel
}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <form onSubmit={onSubmit} className='task-form'>
            <fieldset className='task-form__field-set'>
                <Input
                    value={title}
                    placeholder="Title*"
                    onChange={(event) => {  }}/>
                <Input
                    value={description}
                    placeholder="Description*"
                    onChange={(event) => {  }}/>
            </fieldset>
            <div className='task-form__buttons'>
                <Button value="Cancel"/>
                <Button value="Save" type={ButtonType.Sumbit}/>
            </div>
        </form>
    )
};

export default TaskForm;