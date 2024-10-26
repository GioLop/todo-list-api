import { FC } from "react";

type TaskCardType = {
    title: string;
    description: string;
    status: string;
};

const TaskCard:FC<TaskCardType> = ({ title, description, status }) => (
    <div>
        <h2>{ title }</h2>
        <p>{ status }</p>
        <p>{ description }</p>
    </div>
);

export default TaskCard;