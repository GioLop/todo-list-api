import { FC, MouseEvent, ReactNode, useLayoutEffect, useRef, useState } from "react";
import NavButton from "../nav-button/nav-button.component";
import NavIndicator from "../nav-indicator/nav-indicator.component";
import './nav-bar.component.scss'

type NavItemType = {
    name: string,
    selected: boolean,
    value: string
};

type NavBarType = {
    additionalElement?: ReactNode,
    onItemChange: (navItem:NavItemType) => void
};

const listItems = [
    {
        name: 'All',
        selected: true,
        value: 'ALL'
    },
    {
        name: 'Pending',
        selected: false,
         value: 'PENDING'
    },
    {
        name: 'In Progress',
        selected: false,
        value: 'IN_PROGRESS'
    },
    {
        name: 'Completed',
        selected: false,
        value: 'DONE'
    },
];

const NavBar:FC<NavBarType> = ({ additionalElement, onItemChange }) => {
    const [ items, setItems ] = useState(listItems);
    const [ carWidth, setCarWidth] = useState(0);
    const [ carLeft, setcarLeft] = useState(0);

    const buttonRefs = useRef<HTMLButtonElement[]>([]);

    const handleItemClick = (item:NavItemType) => (event:MouseEvent<HTMLButtonElement>) => {
        setItems([...items].map((_item) => ({ ..._item, selected: item.name === _item.name ? true : false })))
        setCarWidth((event.target as HTMLButtonElement).clientWidth);
        setcarLeft((event.target as HTMLButtonElement).offsetLeft);
        onItemChange(item);
    };

    useLayoutEffect(() => {
        const selectedIndex = items.findIndex(item => item.selected);
        const selectedButton = buttonRefs.current[selectedIndex];

        if (selectedButton) {
            setCarWidth((selectedButton as HTMLButtonElement).clientWidth);
            setcarLeft((selectedButton as HTMLButtonElement).offsetLeft);
        }
      }, [items]);

    return (
        <nav className="nav-bar">
            <div className="nav-bar__first-line">
                <ul className="nav-bar__list">
                    {items.map((item, index) => (
                        <li className="nav-bar__item" key={`nav-item-${item.name}`}>
                            <NavButton
                                selected={item.selected}
                                onClick={handleItemClick(item)}
                                ref={(el) => buttonRefs.current[index] = el!}>{item.name}</NavButton>
                        </li>
                    ))}
                </ul>
                { additionalElement }
            </div>
            
            <NavIndicator left={carLeft} width={carWidth} />
        </nav> 
    );
};

export default NavBar;