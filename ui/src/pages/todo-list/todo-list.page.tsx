import { FC } from "react";
import Link from "../../components/core/link/link.component";
import NavBar from "../../components/core/nav-bar/nav-bar.component";
import Header from "../../components/core/header/header.component";
import Button from "../../components/core/button/button.component";

const TodoList:FC = () => {

    const handleAddTaskClick = () => {
        console.log('Add Task click');
    };
    
    const addtaskButton = <Button onClick={handleAddTaskClick} value="Add Task"/>;
    
    return (
        <>
            <Header 
                message={'giovanni.helion@gmail.com'}
                element={<Link >Logout</Link>}/>
            <NavBar onItemChange={() => {}} additionalElement={addtaskButton}/>
            <main className='main'></main>
        </>
    );
};

export default TodoList;