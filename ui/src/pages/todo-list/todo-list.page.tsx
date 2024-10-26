import { FC, useState } from "react";
import Link from "../../components/core/link/link.component";
import NavBar from "../../components/core/nav-bar/nav-bar.component";
import Header from "../../components/core/header/header.component";
import Button from "../../components/core/button/button.component";
import TaskForm from "../../components/features/task-form/task-form.component";
import useTasks from "../../hooks/useTasks.hook";
import TaskCard from "../../components/features/task-card/task-card.cmponent";
import useUser from "../../hooks/useUser.hook";
import Logout from "../../components/features/logout/logout.component";

const TodoList:FC = () => {
    const { user } = useUser();
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
                message={user?.email}
                element={<Logout/>}/>
            
            <NavBar
                onItemChange={() => {}}
                additionalElement={!addTaskIsVisble &&  <Button onClick={toogleAddTaskForm} value="Add Task"/>}/>
            
            <main className='todo-main'>
                { addTaskIsVisble && <TaskForm onSubmit={handleOnAddTaskSubmit} onCancel={toogleAddTaskForm}/> }

                {tasks.map(({ title, description, taskState }, index) => (
                    <TaskCard
                        key={`${title}-${index}`}
                        title={title}
                        description={description}
                        status={taskState}/>
                ))}
            </main>
        </>
    );
};

export default TodoList;