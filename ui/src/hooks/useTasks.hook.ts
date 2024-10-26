import { useCallback, useEffect, useState } from "react";
import useApi from "./useApi.hook";
import { httpGetTasks, httpPostTask } from "../services/tasks.service";

const useTasks = () => {
    const api = useApi();
    const [tasks, setTasks] = useState([]);

    const addNewTask = async ({ title, description }: { title: string, description: string }) => {
        try {
            const response = await httpPostTask(api, { title, description });
            if (response.statusText === 'OK') {
                setTasks([...tasks, response.data])
            };
        } catch (error) {
            console.error(`Error adding task: ${(error as Error).message}`);
        }
    };

    const fetchTasks = useCallback(async () => {
        try {
            const response = await httpGetTasks(api);
            
            if (response.statusText === 'OK') {
                const { data } = response;
                setTasks([...tasks, ...data.data]);
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
        addNewTask
    }
};

export default useTasks;