import axios from "axios";
import { LoginType } from "../types/auth.type";

const API_SERVER = 'http://localhost:3000/api/v1';


const httpPostLogin = async (data:LoginType) => {
    try {
        return axios.post(`${API_SERVER}/login`, data)
    } catch (error) {
        console.error(error);
    }
};

const httpPostRefreshToken = async (refreshToken:string) => {
    try {
        return axios.post(`${API_SERVER}/refresh-token`, {
            refreshToken
        });
    } catch (error) {
        console.error(error);
    };
};

export {
    httpPostLogin,
    httpPostRefreshToken
};