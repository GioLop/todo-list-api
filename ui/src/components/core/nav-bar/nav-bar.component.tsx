import { FC, MouseEvent, useLayoutEffect, useRef, useState } from "react";
import NavButton from "../nav-button/nav-button.component";
import NavIndicator from "../nav-indicator/nav-indicator.component";
import './nav-bar.component.scss'

type NavBarType = {
    onItemChange: () => void
};

type NavItemType = {
    name: string,
    selected: boolean,
    value: string
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

const NavBar:FC<NavBarType> = () => {
    const [ items, setItems ] = useState(listItems);
    const [ carWidth, setCarWidth] = useState(0);
    const [ carLeft, setcarLeft] = useState(0);

    const buttonRefs = useRef<HTMLButtonElement[]>([]);

    const handleItemClick = (item:NavItemType) => (event:MouseEvent<HTMLButtonElement>) => {
        setItems([...items].map((_item) => ({ ..._item, selected: item.name === _item.name ? true : false })))
        setCarWidth((event.target as HTMLButtonElement).clientWidth);
        setcarLeft((event.target as HTMLButtonElement).offsetLeft);
    };

    useLayoutEffect(() => {
        console.log(buttonRefs);
        const selectedIndex = items.findIndex(item => item.selected);
        const selectedButton = buttonRefs.current[selectedIndex];

        if (selectedButton) {
            setCarWidth((selectedButton as HTMLButtonElement).clientWidth);
            setcarLeft((selectedButton as HTMLButtonElement).offsetLeft);
        }
      }, [items]);

    return (
        <nav className="nav-bar">
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
            <NavIndicator left={carLeft} width={carWidth} />
        </nav> 
    );
};

export default NavBar;