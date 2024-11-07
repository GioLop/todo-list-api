import { useCallback, useEffect, useState } from "react";
import useApi from "./useApi.hook";
import { httpDeleteTask, httpGetTasks, httpPostTask, httpUpdateTask } from "../services/tasks.service";
import { TaskDataType } from "../components/features/task-card/task-card.component";

const useTasks = () => {
    const api = useApi();
    const [ tasks, setTasks ] = useState<TaskDataType[]>([]);
    const [ nextPage, setNextPage ] = useState<number>(1);
    const [ hasNextpage, setHasNextpage ] = useState(false);
    const [ tasksFilter, setTasksFilter ] = useState('');
    
    const limit = 10;
    
    const addNewTask = useCallback(async ({ title, description }: { title: string, description: string }) => {
        try {
            const response = await httpPostTask(api, { title, description });
            
            if (response.statusText === 'OK') {
                const { data } = response;
                setTasks([ data, ...tasks  ]);
            };
        } catch (error) {
            console.error(`Error adding task: ${(error as Error).message}`);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tasks]); 

    const editTask = useCallback(async (id:number, changes: { title?:string, description?:string, taskState?:string }) => {
        try {
            const response = await httpUpdateTask(api, id, changes);
            
            if (response.statusText === 'OK') {
                const { data } = response;
                const newTasks = tasks.map((task) => task.id === data.id ? data : task );
                
                setTasks([ ...newTasks ]);
            };
        } catch (error) {
            console.error(`Error updating task ${id}: ${(error as Error).message}`);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tasks]);

    const deleteTask = useCallback(async (id:number) => {
        try {
            const response = await httpDeleteTask(api, id);
            
            if (response.status === 204) {
                const newTasks = tasks.filter((task) =>{
                    console.log(task);
                    return  task.id !== id;
                });
                setTasks([ ...newTasks ]);
            }; 
        } catch (error) {
            console.error(`Error deleting task ${id}: ${(error as Error).message}`);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tasks]);

    const fetchMoreTasks = useCallback(async () => {
        try {
            const response = await httpGetTasks(api, { page: nextPage, limit:limit, filter:tasksFilter });
            
            if (response.statusText === 'OK') {
                const { data } = response;
                
                if (data.total === limit) {
                    setHasNextpage(true);
                    setNextPage(data.page + 1);
                } 

                if (data.total < limit) {
                    setHasNextpage(false);
                    setNextPage(0);
                }

                setTasks([...tasks, ...data.data]);
            };
        } catch (error) {
            console.error(`Error fetching tasks: ${(error as Error).message}`);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tasks, tasksFilter]);
    
    const fetchFilteredTasks = useCallback(async (filter:string) => {
        try {
            const response = await httpGetTasks(api, { page:nextPage, limit:limit, filter:filter });
            
            if (response.statusText === 'OK') {
                const { data } = response;
                if (data.total === limit) {
                    setHasNextpage(true);
                    setNextPage(data.page + 1);
                } 

                if (data.total < limit) {
                    setHasNextpage(false);
                    setNextPage(0);
                }
                
                setTasksFilter(filter);
                setTasks(data.data);
            };

        } catch (error) {
            console.error(`Error filtering tasks by ${filter}: ${(error as Error).message}`);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchInitalTasks = useCallback(async () => {
        try {
            const response = await httpGetTasks(api, { page:nextPage, limit:limit });
            
            if (response.statusText === 'OK') {
                const { data } = response;
                if (data.total === limit) {
                    setHasNextpage(true);
                    setNextPage(data.page + 1);
                } 

                if (data.total < limit) {
                    setHasNextpage(false);
                    setNextPage(0);
                }
                
                setTasks(data.data);
            };

        } catch (error) {
            console.error(`Error fetching tasks: ${(error as Error).message}`);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

    useEffect(() => {
        fetchInitalTasks();
    }, [fetchInitalTasks]);

    return {
        tasks,
        hasNextpage,
        addNewTask,
        editTask,
        deleteTask,
        fetchMoreTasks,
        fetchFilteredTasks
    }
};

export default useTasks;