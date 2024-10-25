import { FC, useState } from "react";
import Link from "../../components/core/link/link.component";
import NavBar from "../../components/core/nav-bar/nav-bar.component";
import Header from "../../components/core/header/header.component";
import Button from "../../components/core/button/button.component";
import TaskForm from "../../components/features/task-form/task-form.component";

const TodoList:FC = () => {
    const [ addTaskIsVisble, setAddTaskIsVisble ] = useState(false);
    
    const toogleAddTaskForm = () => {
        setAddTaskIsVisble(!addTaskIsVisble)
    };
    
    const handleAddTask = ({ title, description }:{ title:string, description:string }) => {
        console.log(title);
        console.log(description);
    };

    return (
        <>
            <Header 
                message={'giovanni.helion@gmail.com'}
                element={<Link >Logout</Link>}/>
            
            <NavBar
                onItemChange={() => {}}
                additionalElement={
                    !addTaskIsVisble ? 
                    <Button onClick={toogleAddTaskForm} value="Add Task"/> :
                    null
                }/>
            
            <main className='main'></main>
            
            {
                addTaskIsVisble ?
                <TaskForm onSubmit={handleAddTask} onCancel={toogleAddTaskForm}/> :
                null
            }
        </>
    );
};

export default TodoList;