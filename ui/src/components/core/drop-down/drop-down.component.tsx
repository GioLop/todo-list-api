import { FC, useState } from "react";
import TaskStatus, { StatusOptionsType } from "../task-status/task-status.component";
import useClickOutSide from "../../../hooks/useClickOutside.hook";

import './drop-down.component.scss';

type DropOption = {
    option: string,
    value: StatusOptionsType
};

type DropDownType = {
    label:string,
    options: Array<DropOption>,
    onOptionClick: (option:DropOption) => void
};

const DropDown:FC<DropDownType> = ({ label, options, onOptionClick }) => {
    const [ dropVisible, setDropVisible ] = useState(false);
    const { containerRef } = useClickOutSide(setDropVisible, false);

    const handleDropDownVisibility = () => {
        setDropVisible(!dropVisible)
    };

    const handleOptionClick = ({ option, value }:DropOption) => () => {
        setDropVisible(false);
        return onOptionClick({ option, value })
    };

    return (
        <div
            ref={containerRef}
            className={`drop-down ${ dropVisible && 'drop-down--open'}`}>
            <button
                className="drop-down__label"
                onClick={handleDropDownVisibility}>{ label }</button>
            <ul className={`drop-down__list ${dropVisible &&'drop-down__list--visible'}`}>
                { options.map(({ option, value }, index) => (
                    <li
                        key={`${value}-${index}`}
                        className="drop-down__item">
                        <button
                            className="drop-down__option"
                            value={value}
                            onClick={handleOptionClick({ option, value })}>
                                <TaskStatus status={value}/>
                        </button>
                    </li>
                )) }
            </ul>
        </div>
    )
};

export type { DropOption };

export default DropDown;