import { useCallback, useEffect, useState } from "react";
import useApi from "./useApi.hook";
import { httpGetTasks, httpPostTask, httpUpdateTask } from "../services/tasks.service";

const useTasks = () => {
    const api = useApi();
    const [ tasks, setTasks ] = useState([]);

    const addNewTask = async ({ title, description }: { title: string, description: string }) => {
        try {
            const response = await httpPostTask(api, { title, description });
            
            if (response.statusText === 'OK') {
                const { data } = response;
                setTasks([ ...tasks, data ]);
            };
        } catch (error) {
            console.error(`Error adding task: ${(error as Error).message}`);
        }
    };

    const editTask = async (id:number, changes: { title?:string, description?:string, taskStaus?:string }) => {
        try {
            const response = await httpUpdateTask(api, id, changes);
            
            if (response.statusText === 'OK') {
                const { data } = response;
                const newTasks = tasks.map((task) => task.id === data.id ? data : task )
                
                setTasks([ ...newTasks ]);
            };
        } catch (error) {
            console.error(`Error updating task ${id}: ${(error as Error).message}`);
        }
    };

    const fetchTasks = useCallback(async () => {
        try {
            const response = await httpGetTasks(api);
            
            if (response.statusText === 'OK') {
                const { data } = response;
                setTasks([ ...tasks, ...data.data ]);
            };
        } catch (error) {
            console.error(`Error fetching tasks: ${(error as Error).message}`);
        }
    }, []); 

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    return {
        tasks,
        addNewTask,
        editTask
    }
};

export default useTasks;