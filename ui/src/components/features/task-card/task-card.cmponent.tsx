import { FC } from "react";
import './task-card.cmponent.scss'
import TaskStatus, { StatusOptionsType } from "../../core/task-status/task-status.component";
import UpdateStatus from "../update-status/update-status.component";

type TaskDataType = {
    title: string;
    description: string;
    taskState: StatusOptionsType;
};

type TaskCardType = {
    data: TaskDataType
};

const TaskCard:FC<TaskCardType> = ({ data: { title, description, taskState } }) => (
    <div className="task-card">
        <div className="task-card__interactive">
            <div className="task-card__status">
                <TaskStatus status={ taskState }/>
                <UpdateStatus currentStatus={taskState} onUpdate={() => {}}/>
            </div>
        </div>
        <h2 className="task-card__title">{ title }</h2>
        <p className="task-card__description"> { description }</p>
    </div>
);

export type {
    TaskDataType 
};

export default TaskCard;