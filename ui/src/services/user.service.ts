import { AxiosInstance } from "axios";

const USER_ENDPOINT = '/user'

const httpGetUser = async (api: AxiosInstance) => {
    const response = await api.get(`${USER_ENDPOINT}`);
    return response;
};

export {
    httpGetUser
}