import { FC } from "react";
import './meatball-buttom.component.scss'

type MeatballButtonType =  {
    onClick: () => void
};

const MeatballButton:FC<MeatballButtonType> = ({ onClick }) => (
    <button className="meat-ball" onClick={onClick}>
        <div className="meat-ball__dot"></div>
        <div className="meat-ball__dot"></div>
        <div className="meat-ball__dot"></div>
    </button>
);

export default MeatballButton;