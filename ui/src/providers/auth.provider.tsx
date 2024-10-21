import { createContext, ReactNode, useMemo } from "react";
import useJWTToken from "../hooks/useJWTToken.hook";

type AuthContextType = {
    token: string | null;
    addToken: (token:string) => void;
    deleteToken: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
    children: ReactNode;
  }

const AuthProvider = ({ children }:AuthProviderProps) => {
    const { token, addToken, deleteToken } = useJWTToken();
    const context = useMemo(() => ({
        token,
        addToken,
        deleteToken
    }), [token, addToken, deleteToken]);

    return (
        <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
    );
};

export {
    AuthContext
};

export default AuthProvider;
