import axios from "axios";
import { useEffect, useState } from "react";

const useJWTToken = () => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    const addToken = (token:string) => {
        setToken(token);
    };

    const deleteToken = () => {
        setToken(null);
    };

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            localStorage.setItem('token', token);
        } else {
            delete axios.defaults.headers.common['Authorization'];
            localStorage.removeItem('token');
        }
    }, [token]);

    return { token, addToken, deleteToken };
};

export default useJWTToken;