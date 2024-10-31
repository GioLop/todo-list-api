import { FC } from "react";
import DropDown, { DropOption } from "../../core/drop-down/drop-down.component";
import { StatusOptionsType } from "../../core/task-status/task-status.component";

type UpdateStatusType = {
    currentStatus:StatusOptionsType,
    onUpdate: ({ option, value }:DropOption) => void
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

const filterOptions = (
    options:Array<DropOption>,
    currentStatus:StatusOptionsType,
) => options.filter((option) => option.value !== currentStatus);

const UpdateStatus:FC<UpdateStatusType> = ({
    currentStatus, onUpdate
}) => {
    const options = (filterOptions(optionsList as Array<DropOption>, currentStatus));
    
    const handleOptionClick = ({ option, value }:DropOption) => { onUpdate({ option, value }) };

    return <DropDown
        label="Update Status"
        options={options}
        onOptionClick={handleOptionClick}/>
};

export default UpdateStatus;