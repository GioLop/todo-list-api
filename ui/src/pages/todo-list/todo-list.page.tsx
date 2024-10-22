import { FC } from "react";
import Link from "../../components/core/link/link.component";
import NavBar from "../../components/core/nav-bar/nav-bar.component";

const TodoList:FC = () => {
    return (
        <>
            <header className='header'>
                <p>giovanni.helion@gmail.com</p>
                <Link>Logout</Link>
            </header>
            <NavBar />
            <main className='main'></main>
        </>
    );
};

export default TodoList;