import { FC, useState } from "react";
import MeatballButton from "../../core/meatball-button/meatball-buttom.component";
import './edit-task.component.scss';
import ButtonLink from "../../core/button-link/button-link.component";
import useClickOutSide from "../../../hooks/useClickOutside.hook";

type EditTaskType = {
    onClickEdit: () => void,
    onClickDelete: () => void,
};

const EditTask:FC<EditTaskType> = ({ onClickEdit, onClickDelete }) => {
    const [ listVisible, setListVisible ] = useState(false);
    const { containerRef } = useClickOutSide(setListVisible, false);

    const handleMeatballClick = () => setListVisible(!listVisible);

    return (
        <div className="edit-task" ref={containerRef}>
            <MeatballButton onClick={handleMeatballClick}/>
            <ul className={`edit-task__list ${listVisible && 'edit-task__list--visible'}`}>
                <li className="edit-task__item">
                    <ButtonLink value="Edit" onClick={onClickEdit}/>
                </li>
                <li className="edit-task__item">
                <ButtonLink value="Delete" onClick={onClickDelete}/>
                </li>
            </ul>
        </div>
    )
};

export default EditTask;