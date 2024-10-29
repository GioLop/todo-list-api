import { FC } from "react";
import './task-status.component.scss';

type StatusOptionsType = 'PENDING' | 'DONE' | 'IN_PROGRESS';

type TaskStatusType = {
    status: StatusOptionsType
};

const statusMapValue = {
    PENDING: 'Pending',
    DONE: 'Completed',
    IN_PROGRESS: 'In Progress'
};

const statusMapClass = {
    PENDING: 'pending',
    DONE: 'completed',
    IN_PROGRESS: 'in-progress'
};

const TaskStatus:FC<TaskStatusType> = ({ status = 'PENDING' }) => (
    <div className={`task-status task-status--${statusMapClass[status]}`}>{ statusMapValue[status] }</div>
);

export type { StatusOptionsType };

export default TaskStatus;