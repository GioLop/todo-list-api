import { FC } from "react";
import Link from "../../components/core/link/link.component";
import NavBar from "../../components/core/nav-bar/nav-bar.component";
import Header from "../../components/core/header/header.component";

const TodoList:FC = () => {
    return (
        <>
            <Header 
                message={'giovanni.helion@gmail.com'}
                element={<Link>Logout</Link>}/>
            <NavBar onItemChange={() => {}}/>
            <main className='main'></main>
        </>
    );
};

export default TodoList;