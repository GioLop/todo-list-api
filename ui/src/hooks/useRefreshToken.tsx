import { useEffect, useState } from "react";

const useRefreshToken = () => {
    const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refresh-token') || '');
    
    const addRefreshToken = (token:string) => {
        setRefreshToken(token);
    };

    const deleteRefreshToken = () => {
        setRefreshToken('');
    };

    useEffect(() => {
        if (refreshToken && refreshToken !== '') {
            localStorage.setItem('refresh-token', refreshToken);
        } else {
            localStorage.removeItem('refresh-token');
        }
    }, [refreshToken]);

    return { refreshToken, addRefreshToken, deleteRefreshToken };
};

export default useRefreshToken;