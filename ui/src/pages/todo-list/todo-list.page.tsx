import { FC, useState } from "react";
import Link from "../../components/core/link/link.component";
import NavBar from "../../components/core/nav-bar/nav-bar.component";
import Header from "../../components/core/header/header.component";
import Button from "../../components/core/button/button.component";
import TaskForm from "../../components/features/task-form/task-form.component";
import useTasks from "../../hooks/useTasks.hook";

const TodoList:FC = () => {
    const { tasks, addNewTask } = useTasks();
    const [ addTaskIsVisble, setAddTaskIsVisble ] = useState(false);
    
    const toogleAddTaskForm = () => {
        setAddTaskIsVisble(!addTaskIsVisble)
    };
    
    const handleOnAddTaskSubmit = async ({ title, description }:{ title:string, description:string }) => {
        toogleAddTaskForm();
        await addNewTask({ title, description })
    };

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

            {tasks.map((task,index) => (
                <div key={`${task.title}-${index}`}>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                </div>
            ))}
        </>
    );
};

export default TodoList;