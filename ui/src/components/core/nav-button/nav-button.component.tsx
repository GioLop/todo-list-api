import { FC, ReactNode, MouseEvent } from "react";
import './nav-button.component.scss'

type NavButtonType = {
    selected: boolean,
    children: ReactNode,
    onClick: (event:MouseEvent<HTMLButtonElement> ) => void
};

const NavButton:FC<NavButtonType> = ({ 
    selected,
    children,
    onClick
}) => {
    return (
        <button
            className={`nav-button ${selected ? 'nav-button--selected' : ''}`}
            onClick={onClick}>
                { children }
        </button>
    );
};

export default NavButton;