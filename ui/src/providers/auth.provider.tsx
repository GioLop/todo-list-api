import { createContext, ReactNode, useMemo } from "react";
import useJWTToken from "../hooks/useJWTToken.hook";

type AuthContextType = {
    jwtToken: string | null;
    setJwtToken: React.Dispatch<React.SetStateAction<string | null>>;
};

const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
    children: ReactNode;
  }

const AuthProvider = ({ children }:AuthProviderProps) => {
    const { jwtToken, setJwtToken } = useJWTToken();
    const context = useMemo(() => ({
        jwtToken,
        setJwtToken
    }), [jwtToken, setJwtToken]);

    return (
        <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
    );
};

export {
    AuthContext
};

export default AuthProvider;
