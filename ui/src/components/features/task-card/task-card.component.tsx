import { useState, forwardRef } from "react";
import TaskStatus, { StatusOptionsType } from "../../core/task-status/task-status.component";
import UpdateStatus from "../update-status/update-status.component";
import EditTask from "../edit-task/edit-task.component";
import TaskForm, { TaskFormVariants } from "../task-form/task-form.component";

import './task-card.component.scss'
import { DropOption } from "../../core/drop-down/drop-down.component";

type TaskDataType = {
    id: number,
    title: string;
    description: string;
    taskState: StatusOptionsType;
};

type TaskCardType = {
    data: TaskDataType,
    onEditTask: (id:number, changes:{ title?:string, decription?:string }) => void,
    onDeleteTask: (id:number) => void
    onUpdateStatus: (id:number, status:string) => void 
};

const TaskCard = forwardRef<HTMLElement, TaskCardType>(({
    data: { id, title, description, taskState },
    onEditTask,
    onDeleteTask,
    onUpdateStatus
}, ref) => {
    const [ editing, setEditing ] = useState(false);

    const handleOnEditClick = () => { 
        setEditing(true)
    };

    const handleOnDeleteClick = () => {
        onDeleteTask(id);
    };

    const handleOnUpdateStatus = ({ value }:DropOption) => { 
        onUpdateStatus(id, value);
    };

    const handleOnFormSubmit = (task: { title:string, description:string }) => {
        const changes = {
            ...(task.title !== title) && ({ title: task.title }),
            ...(task.description !== description) && ({ description: task.description })
        };
        const hasChanges = Object.keys(changes).length > 0;
        
        if (hasChanges) 
            onEditTask(id, changes);

        setEditing(false);
    };

    const handleOnFormCancel = () => setEditing(false);

    return (
        <>
            {
                !editing ?
                <article
                    ref={ref}
                    className="task-card">
                    <div className="task-card__interactive">
                        <div className="task-card__status">
                            <TaskStatus status={ taskState || 'PENDING' }/>
                            <UpdateStatus
                                currentStatus={ taskState || 'PENDING'}
                                onUpdate={ handleOnUpdateStatus }/>
                        </div>
                        <EditTask
                            onClickEdit={ handleOnEditClick }
                            onClickDelete={ handleOnDeleteClick }/>
                    </div>
                    <h2 className="task-card__title">{ title }</h2>
                    <p className="task-card__description"> { description }</p>
                </article> :
                <TaskForm
                    type={TaskFormVariants.Edit}
                    dataToEdit={{ title, description }}
                    onSubmit={ handleOnFormSubmit }
                    onCancel={ handleOnFormCancel }/>
            }
        </>
    );
});

export type {
    TaskDataType 
};

export default TaskCard;