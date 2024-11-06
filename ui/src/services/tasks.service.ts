import { AxiosInstance } from "axios";

const TODOS_ENDPOINT = '/todos'

const httpGetTasks = async (
    api: AxiosInstance,
    { page = 1, limit = 10 }:{page:number, limit:number}) => {
    const response = await api.get(`${TODOS_ENDPOINT}/?page=${page}&limit=${limit}`);
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

const httpUpdateTask = async (
    api: AxiosInstance, id:number,
    { 
        title,
        description,
        taskState
    }: { title?:string, description?:string, taskState?:string }) => {
        const response = await api.put(`${TODOS_ENDPOINT}/${id}`, { 
            title,
            description,
            taskState
        });
        return response;
};

const httpDeleteTask = async (api: AxiosInstance, id:number) => {
    const response = await api.delete(`${TODOS_ENDPOINT}/${id}`);
    return response;
 };

export {
    httpGetTasks,
    httpPostTask,
    httpUpdateTask,
    httpDeleteTask
};