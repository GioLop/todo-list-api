import { useCallback, useEffect, useState } from "react";
import useApi from "./useApi.hook";
import { httpGetTasks } from "../services/tasks.services";

const useTasks = () => {
    const api = useApi();
    const [tasks, setTasks] = useState([]);

    const fetchTasks = useCallback(async () => {
        try {
            const { data } = await httpGetTasks(api);
            setTasks(data);
        } catch (error) {
            console.error(`Error fetching tasks: ${(error as Error).message}`);
        }
    }, []); 

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    return {
        tasks
    }
};

export default useTasks;