import { FC } from "react";
import Link from "../../components/core/link/link.component";

const TodoList:FC = () => {
    return (
        <>
            <header className='header'>
                <p>giovanni.helion@gmail.com</p>
                <Link>Logout</Link>
            </header>
            <main className='main'></main>
        </>
    );
};

export default TodoList;