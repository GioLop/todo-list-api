import { AxiosInstance } from "axios";

const TODOS_ENDPOINT = '/todos'

const httpGetTasks = async (api: AxiosInstance) => {
    const response = await api.get(`${TODOS_ENDPOINT}/?page=1&limit=10`);
    return response;
};

const httpPostTask = async (
    api: AxiosInstance,
    { 
        title,
        description
    }: { title:string, description:string }
) => {
    const response =  await api.post(TODOS_ENDPOINT, { title, description });
    return response;
};

const httpUpdateTask = (api: AxiosInstance) => { };

const httpDeleteTask = (api: AxiosInstance) => { };

export {
    httpGetTasks,
    httpPostTask,
    httpUpdateTask,
    httpDeleteTask
};