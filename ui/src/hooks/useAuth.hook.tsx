import { useContext } from "react";
import { AuthContext } from "../providers/auth.provider";

const useAuth = () => useContext(AuthContext);

export default useAuth;