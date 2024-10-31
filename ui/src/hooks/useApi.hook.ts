import axios, { AxiosInstance } from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth.hook";

const API_SERVER = 'http://localhost:3000/api/v1';

const api: AxiosInstance = axios.create({
    baseURL: API_SERVER
});

const useApi = () => {
    const {
        accessToken,
        addAccessToken,
        deleteAccessToken,
        refreshToken,
        addRefreshToken,
        deleteRefreshToken
    } = useAuth();

    useEffect(() => {
        const requestInterceptor = api.interceptors.request.use(
            (config) => {
                if (accessToken) {
                    config.headers['Authorization'] = `Bearer ${accessToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        const responseInterceptor = api.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && error.response.status === 401) {
                    try {
                        const { data: { accessToken } } = await axios.post(`${API_SERVER}/refresh-token`, {
                            refreshToken
                        });
                        addAccessToken(accessToken);
                        error.config.headers['Authorization'] = `Bearer ${accessToken}`;
                        
                        return api(error.config);
                    } catch (refreshTokenError) {
                        deleteAccessToken();
                        deleteRefreshToken();
                        
                        return Promise.reject(refreshTokenError);
                    }
                }

                return Promise.reject(error);
            }
        );
        
        return () => {
            api.interceptors.request.eject(requestInterceptor);
            api.interceptors.response.eject(responseInterceptor);
        };
    }, [accessToken, addAccessToken, deleteAccessToken, deleteRefreshToken, refreshToken]);

    return api;
};

export default useApi;