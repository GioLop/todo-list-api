import { FC, useState } from "react";
import Link from "../../components/core/link/link.component";
import NavBar from "../../components/core/nav-bar/nav-bar.component";
import Header from "../../components/core/header/header.component";
import Button from "../../components/core/button/button.component";
import TaskForm from "../../components/features/task-form/task-form.component";
import useTasks from "../../hooks/useTasks.hook";

const TodoList:FC = () => {
    const { tasks } = useTasks();
    const [ addTaskIsVisble, setAddTaskIsVisble ] = useState(false);
    
    const toogleAddTaskForm = () => {
        setAddTaskIsVisble(!addTaskIsVisble)
    };
    
    const handleOnAddTaskSubmit = ({ title, description }:{ title:string, description:string }) => {
        console.log(title);
        console.log(description);
    };
    console.log(tasks);
    return (
        <>
            <Header 
                message={'giovanni.helion@gmail.com'}
                element={<Link >Logout</Link>}/>
            
            <NavBar
                onItemChange={() => {}}
                additionalElement={!addTaskIsVisble &&  <Button onClick={toogleAddTaskForm} value="Add Task"/>}/>
            
            <main className='main'></main>
            
            { addTaskIsVisble && <TaskForm onSubmit={handleOnAddTaskSubmit} onCancel={toogleAddTaskForm}/> }

            {tasks.map((task) => (
                <div>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                </div>
            ))}
        </>
    );
};

export default TodoList;