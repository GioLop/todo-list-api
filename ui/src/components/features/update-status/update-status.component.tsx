import { FC, useState } from "react";
import DropDown, { DropOption } from "../../core/drop-down/drop-down.component";
import { StatusOptionsType } from "../../core/task-status/task-status.component";

type UpdateStatusType = {
    currentStatus:StatusOptionsType,
    onUpdate: () => void
};

const optionsList = [
    {
        option: 'Pending',
        value: 'PENDING'
    },
    {
        option: 'In Progress',
        value: 'IN_PROGRESS'
    },
    {
        option: 'Completed',
        value: 'DONE'
    }
];

const filterOptions = (options:Array<DropOption>, currentStatus:StatusOptionsType) => options.filter((option) => option.value !== currentStatus);

const UpdateStatus:FC<UpdateStatusType> = ({ currentStatus }) => {
    const [options, setOptions] = useState(filterOptions(optionsList as Array<DropOption>, currentStatus));
    
    return <DropDown label="Update Status" options={options} onOptionClick={() => {}}/>
};

export default UpdateStatus;