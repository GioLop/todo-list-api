import { useEffect, useState } from "react";
import { httpPostRevokeToken } from "../services/auth.service";

const useRefreshToken = () => {
    const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refresh-token') || '');

    const addRefreshToken = (token:string) => {
        setRefreshToken(token);
    };

    const deleteRefreshToken = async () => {
        localStorage.removeItem('refresh-token');
        
        try {
            const response = await httpPostRevokeToken(refreshToken);
            console.log(response);
            
        } catch (error) {
            console.log(`Error while revoking token: ${(error as Error).message}`);
        }
        
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