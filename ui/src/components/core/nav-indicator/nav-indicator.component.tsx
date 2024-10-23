import { FC } from "react";
import './nav-indicator.component.scss'

type NavIndicatorType = {
    left: number,
    width: number
};

const NavIndicator:FC<NavIndicatorType> = ({ left,  width }) => {
    return (
        <div className="nav-indicator">
            <div className="nav-indicator__car" style={{ left, width }}></div>
            <hr className="nav-indicator__line" />
        </div>
    );
};

export default NavIndicator;