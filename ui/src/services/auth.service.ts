import axios from "axios";
import { LoginType, RegisterType } from "../types/auth.type";

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

const httpPostRevokeToken = async (refreshToken:string) => {
    try {
        return axios.post(`${API_SERVER}/revoke-token`, {
            refreshToken
        });
    } catch (error) {
        console.error(error);
    };
};

const httpPostRegister = async (data:RegisterType) => {
    try {
        return axios.post(`${API_SERVER}/register`, data)
    } catch (error) {
        console.error(error);
    }
};

export {
    httpPostLogin,
    httpPostRefreshToken,
    httpPostRevokeToken,
    httpPostRegister
};