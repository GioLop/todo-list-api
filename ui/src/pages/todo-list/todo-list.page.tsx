import { FC, useCallback, useEffect, useRef, useState } from "react";
import NavBar, { NavItemType } from "../../components/core/nav-bar/nav-bar.component";
import Header from "../../components/core/header/header.component";
import Button from "../../components/core/button/button.component";
import TaskForm from "../../components/features/task-form/task-form.component";
import useTasks from "../../hooks/useTasks.hook";
import TaskCard, { TaskDataType } from "../../components/features/task-card/task-card.component";
import useUser from "../../hooks/useUser.hook";
import Logout from "../../components/features/logout/logout.component";

const TodoList:FC = () => {
    const { userEmail } = useUser();
    const { 
        tasks,
        hasNextpage,
        addNewTask,
        editTask,
        deleteTask,
        fetchMoreTasks,
        fetchFilteredTasks
    } = useTasks();
    const [ addTaskIsVisble, setAddTaskIsVisble ] = useState(false);
    const [ appliedFilter, setAppliedFilter ] = useState('ALL');

    const bottomRef = useRef<HTMLElement | null>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    const toogleAddTaskForm = () => {
        setAddTaskIsVisble(!addTaskIsVisble);
    };
    
    const handleOnAddTaskSubmit = async (
        {
            title,
            description
        }:{ title:string, description:string }) => {
        toogleAddTaskForm();
        addNewTask({ title, description });
    };

    const handleOnEditTask = (id:number, changes:any) => { 
        editTask(id, changes);
    };

    const handleUpdateStatus = (id:number, status:string) => {
        editTask(id, { taskState: status });
    };

    const handleDeleteTask = (id:number) => { 
        deleteTask(id)
    };

    const setLastItemRef = useCallback((node: HTMLElement | null) => {
        if (observerRef.current) observerRef.current.disconnect();
        
        if (node) {
            observerRef.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasNextpage) {
                    fetchMoreTasks()
                }
            });
            observerRef.current.observe(node);
        }
        bottomRef.current = node;
    }, [hasNextpage]);

    const handleMenuChange = (navItem: NavItemType) => {
        fetchFilteredTasks(navItem.value);
        setAppliedFilter(navItem.value);
    };

    useEffect(() => {
        return () => {
            if (observerRef.current)
                observerRef.current.disconnect();
        };
    }, []);

    return (
        <>
            <Header 
                message={userEmail}
                element={<Logout/>}/>
            
            <NavBar
                onItemChange={handleMenuChange}
                additionalElement={!addTaskIsVisble &&  <Button onClick={toogleAddTaskForm} value="Add Task"/>}/>
            
            <main className='todo-main'>
                { 
                    addTaskIsVisble && 
                    <TaskForm 
                        onSubmit={handleOnAddTaskSubmit}
                        onCancel={toogleAddTaskForm}/> 
                }

                { 
                    tasks.map((task, index) => (
                        (appliedFilter === 'ALL' || appliedFilter === task.taskState) && 
                        (
                            <TaskCard
                                ref={tasks.length === index + 1 ? setLastItemRef : null}
                                key={`${(task as TaskDataType).title}-${index}`}
                                data={task}
                                onEditTask={handleOnEditTask}
                                onUpdateStatus={handleUpdateStatus}
                                onDeleteTask={handleDeleteTask}/>
                        )
                    ))
                }
                
            </main>
        </>
    );
};

export default TodoList;