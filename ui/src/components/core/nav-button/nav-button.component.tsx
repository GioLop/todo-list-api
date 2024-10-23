import { ReactNode, MouseEvent, forwardRef } from "react";
import './nav-button.component.scss'

type NavButtonType = {
    selected: boolean,
    children: ReactNode,
    onClick: (event:MouseEvent<HTMLButtonElement> ) => void
};

const NavButton = forwardRef<HTMLButtonElement, NavButtonType>(
    ({ selected, children, onClick }, ref) => {
      return (
        <button
          ref={ref}
          className={`nav-button ${selected ? 'nav-button--selected' : ''}`}
          onClick={onClick}>
          {children}
        </button>
      );
    }
  );

export default NavButton;