import { useEffect, useState } from "react";
import { httpPostRevokeToken } from "../services/auth.service";

const useRefreshToken = () => {
    const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refresh-token') || '');

    const addRefreshToken = (token:string) => {
        setRefreshToken(token);
    };

    const deleteRefreshToken = async () => {
       setRefreshToken('');
    };

    const revokeToken = async () => {
        try {
            await httpPostRevokeToken(refreshToken);
            setRefreshToken('');
        } catch (error) {
            console.log(`Error while revoking token: ${(error as Error).message}`);
        }
    }

    useEffect(() => {
        if (refreshToken && refreshToken !== '') {
            localStorage.setItem('refresh-token', refreshToken);
        } else {
            localStorage.removeItem('refresh-token');
        }
    }, [refreshToken]);

    return {
        refreshToken,
        addRefreshToken,
        deleteRefreshToken,
        revokeToken
    };
};

export default useRefreshToken;