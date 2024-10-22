import { FC } from "react";
import './nav-indicator.component.scss'

const NavIndicator:FC = () => {
    return (
        <div className="nav-indicator">
            <div className="nav-indicator__car"></div>
            <hr className="nav-indicator__line" />
        </div>
    );
};

export default NavIndicator;