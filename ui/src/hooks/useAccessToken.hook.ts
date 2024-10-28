import { useEffect, useState } from "react";

const useAccessToken = () => {
    const [ accessToken, setAccessToken ] = useState(localStorage.getItem('token') || '');
    
    const addAccessToken = (token:string) => {
        setAccessToken(token);
    };

    const deleteAccessToken = () => {
        setAccessToken('');
        localStorage.removeItem('token');
    };

    useEffect(() => {
        if (accessToken && accessToken !== '') {
            localStorage.setItem('token', accessToken);
        } else {
            localStorage.removeItem('token');
        }
    }, [accessToken]);

    return {
        accessToken,
        addAccessToken,
        deleteAccessToken
    };
};

export default useAccessToken;