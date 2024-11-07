import axios from "axios";
import { LoginType, RegisterType } from "../types/auth.type";

const API_SERVER = 'http://localhost:3000/api/v1';

const httpPostLogin = async (data:LoginType) => axios.post(`${API_SERVER}/login`, data);

const httpPostRefreshToken = async (refreshToken:string) => axios.post(`${API_SERVER}/refresh-token`, { refreshToken });

const httpPostRevokeToken = async (refreshToken:string) => axios.post(`${API_SERVER}/revoke-token`, { refreshToken });

const httpPostRegister = async (data:RegisterType) => axios.post(`${API_SERVER}/register`, data);

export {
    httpPostLogin,
    httpPostRefreshToken,
    httpPostRevokeToken,
    httpPostRegister
};