import { FC, ReactNode } from "react";
import './header.component.scss';

type HeaderType = {
    message: ReactNode;
    element?: ReactNode
};

const Header:FC<HeaderType> = ({ message, element }) => (
    <header className='header'>
        <p className='header__message'>{ message }</p>
        <div className='header__element'>{ element }</div>
    </header>
);

export default Header;