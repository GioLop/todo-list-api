import { FC, ReactNode } from "react";
import './link.component.scss';

type LinkType = {
   href?: string,
   target?: string,
   children?: ReactNode 
};
const Link:FC<LinkType> = ({ href, target, children }) => (
    <a className='link' href={href} target={target}>{children}</a>
);

export default Link;