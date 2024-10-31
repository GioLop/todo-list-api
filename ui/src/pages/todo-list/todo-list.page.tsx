import { FC, useState } from "react";
import NavBar from "../../components/core/nav-bar/nav-bar.component";
import Header from "../../components/core/header/header.component";
import Button from "../../components/core/button/button.component";
import TaskForm from "../../components/features/task-form/task-form.component";
import useTasks from "../../hooks/useTasks.hook";
import TaskCard, { TaskDataType } from "../../components/features/task-card/task-card.component";
import useUser from "../../hooks/useUser.hook";
import Logout from "../../components/features/logout/logout.component";

const TodoList:FC = () => {
    const { userEmail } = useUser();
    const { tasks, addNewTask, editTask } = useTasks();
    const [ addTaskIsVisble, setAddTaskIsVisble ] = useState(false);

    const toogleAddTaskForm = () => {
        setAddTaskIsVisble(!addTaskIsVisble)
    };
    
    const handleOnAddTaskSubmit = async ({ title, description }:{ title:string, description:string }) => {
        toogleAddTaskForm();
        await addNewTask({ title, description })
    };

    const handleOnEditTask = (id:numbre, changes:any) => { 
        editTask(id, changes)
    };

    return (
        <>
            <Header 
                message={userEmail}
                element={<Logout/>}/>
            
            <NavBar
                onItemChange={() => {}}
                additionalElement={!addTaskIsVisble &&  <Button onClick={toogleAddTaskForm} value="Add Task"/>}/>
            
            <main className='todo-main'>
                { addTaskIsVisble && <TaskForm onSubmit={handleOnAddTaskSubmit} onCancel={toogleAddTaskForm}/> }

                {tasks.map((task, index) => (
                    <TaskCard
                        key={`${(task as TaskDataType).title}-${index}`}
                        data={task}
                        onEditTask={handleOnEditTask}
                        onDeleteTask={(id) => { console.log(`Delete id: ${id}`) }}/>
                ))}
            </main>
        </>
    );
};

export default TodoList;