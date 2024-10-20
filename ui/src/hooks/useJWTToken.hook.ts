import axios from "axios";
import { useEffect, useState } from "react";

const useJWTToken = () => {
    const [jwtToken, setJwtToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        if (jwtToken) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
            localStorage.setItem('token', jwtToken);
        } else {
            delete  axios.defaults.headers.common['Authorization'];
            localStorage.removeItem('token');
        }
    }, [jwtToken]);

    return { jwtToken, setJwtToken };
};

export default useJWTToken;