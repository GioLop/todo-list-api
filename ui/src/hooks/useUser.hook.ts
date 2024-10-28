import { useCallback, useEffect, useState } from "react";
import useApi from "./useApi.hook";
import { httpGetUser } from "../services/user.service";

const useUser = () => {
    const api = useApi();
    const [ userEmail, setUserEmail ] = useState(null);

    const fetchUser = useCallback(async () => {
        try {
            const response = await httpGetUser(api);
            if (response.statusText === 'OK') {
                setUserEmail(response.data.email)
            }
        } catch (error) {
            console.error(`Error fetching user: ${(error as Error).message}`);
        }
    }, []);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    return { userEmail };
};

export default useUser;