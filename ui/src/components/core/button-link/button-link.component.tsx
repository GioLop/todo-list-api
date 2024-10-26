import { FC } from "react";
import './button-link.component.scss'

type ButtonLinkType = {
    value: string,
    onClick: () => void
};

const ButtonLink:FC<ButtonLinkType> = ({ value, onClick }) => <button className='button-link' onClick={onClick}>{value}</button>;

export default ButtonLink;