import { FC } from "react";
import './task-card.cmponent.scss'
import TaskStatus, { StatusOptionsType } from "../../core/task-status/task-status.component";

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
        <div className="task-state">
            <TaskStatus status={ taskState }/>
        </div>
        <h2 className="task-card__title">{ title }</h2>
        <p className="task-card__description"> { description }</p>
    </div>
);

export type {
    TaskDataType 
};

export default TaskCard;