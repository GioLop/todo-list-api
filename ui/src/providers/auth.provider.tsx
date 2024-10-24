import { createContext, ReactNode, useMemo } from "react";
import useAccessToken from "../hooks/useAccessToken.hook";
import useRefreshToken from "../hooks/useRefreshToken";

type AuthContextType = {
    accessToken: string;
    addAccessToken: (token:string) => void;
    deleteAccessToken: () => void;
    refreshToken: string;
    addRefreshToken: (token:string) => void;
    deleteRefreshToken: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
    children: ReactNode;
};

const AuthProvider = ({ children }:AuthProviderProps) => {
    const { accessToken, addAccessToken, deleteAccessToken } = useAccessToken();
    const { refreshToken, addRefreshToken, deleteRefreshToken } = useRefreshToken();

    const context = useMemo(() => ({
        accessToken,
        addAccessToken,
        deleteAccessToken,
        refreshToken,
        addRefreshToken,
        deleteRefreshToken
    }), [
        accessToken,
        addAccessToken,
        deleteAccessToken,
        refreshToken,
        addRefreshToken,
        deleteRefreshToken ]);

    return (
        <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
    );
};

export {
    AuthContext
};

export default AuthProvider;
