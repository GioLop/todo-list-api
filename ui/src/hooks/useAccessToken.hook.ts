import axios from "axios";
import { useEffect, useState } from "react";

const useAccessToken = () => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem('token') || '');
    
    const addAccessToken = (token:string) => {
        setAccessToken(token);
    };

    const deleteAccessToken = () => {
        setAccessToken('');
    };

    useEffect(() => {
        if (accessToken && accessToken !== '') {
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            localStorage.setItem('token', accessToken);
        } else {
            delete axios.defaults.headers.common['Authorization'];
            localStorage.removeItem('token');
        }
    }, [accessToken]);

    return { accessToken, addAccessToken, deleteAccessToken };
};

export default useAccessToken;