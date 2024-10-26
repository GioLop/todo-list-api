import { useCallback, useEffect, useState } from "react";
import useApi from "./useApi.hook";
import { httpGetUser } from "../services/user.service";

const useUser = () => {
    const api = useApi();
    const [user, setUser ] = useState(null);

    const fetchUser = useCallback(async () => {
        try {
            const response = await httpGetUser(api);
            if (response.statusText === 'OK') {
                setUser(response.data)
            }
        } catch (error) {
            console.error(`Error fetching user: ${(error as Error).message}`);
        }
    }, []);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    return { user };
};

export default useUser;