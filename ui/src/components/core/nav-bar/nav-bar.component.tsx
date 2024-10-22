import { FC, MouseEvent, useState } from "react";
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

    const handleItemClick = (item:NavItemType) => (event:MouseEvent<HTMLButtonElement>) => {
        setItems([...items].map((_item) => ({ ..._item, selected: item.name === _item.name ? true : false })))
        console.log(item);
        console.log(event);
    };

    return (
        <nav className="nav-bar">
            <ul className="nav-bar__list">
                {items.map((item) => (
                    <li className="nav-bar__item" key={`nav-item-${item.name}`}>
                        <NavButton
                            selected={item.selected}
                            onClick={handleItemClick(item)}>{item.name}</NavButton>
                    </li>
                ))}
            </ul>
            <NavIndicator />
        </nav> 
    ); 
};

export default NavBar;