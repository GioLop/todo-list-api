import { FC, useState } from "react";
import './task-card.cmponent.scss'
import TaskStatus, { StatusOptionsType } from "../../core/task-status/task-status.component";
import UpdateStatus from "../update-status/update-status.component";
import EditTask from "../edit-task/edit-task.component";
import TaskForm, { TaskFormVariants } from "../task-form/task-form.component";

type TaskDataType = {
    title: string;
    description: string;
    taskState: StatusOptionsType;
};

type TaskCardType = {
    data: TaskDataType
};

const TaskCard:FC<TaskCardType> = ({ data: { title, description, taskState } }) => {
    const [ editing, setEditing ] = useState(false);

    const handleOnEditClick = () => { 
        setEditing(true)
    };

    const handleOnDeleteClick = () => {};

    const handleOnUpdateStatus = () => {};

    const handleOnFormSubmit = (task: { title:string, description:string }) => {
        const changes = {
            ...(task.title !== title) && ({ title: task.title }),
            ...(task.description !== description) && ({ description: task.description })
        };
        const hasChanges = Object.keys(changes).length > 0;
        
        if (hasChanges) {
            console.log(changes);
        } else {
            console.log('No changes');
        }

        setEditing(false);
    };

    const handleOnFormCancel = () => setEditing(false);

    return (
        <>
            {
                !editing ?
                <div className="task-card">
                    <div className="task-card__interactive">
                        <div className="task-card__status">
                            <TaskStatus status={ taskState }/>
                            <UpdateStatus
                                currentStatus={taskState}
                                onUpdate={handleOnUpdateStatus}/>
                        </div>
                        <EditTask
                            onClickEdit={handleOnEditClick}
                            onClickDelete={handleOnDeleteClick}/>
                    </div>
                    <h2 className="task-card__title">{ title }</h2>
                    <p className="task-card__description"> { description }</p>
                </div> :
                <TaskForm
                    type={TaskFormVariants.Edit}
                    dataToEdit={{ title, description }}
                    onSubmit={handleOnFormSubmit}
                    onCancel={handleOnFormCancel}/>
            }
        </>
    );
};

export type {
    TaskDataType 
};

export default TaskCard;