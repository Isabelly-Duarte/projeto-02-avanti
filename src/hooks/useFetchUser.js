import { useCallback, useState } from "react";
import api from "../api";

const basePath = "/users";

const useFetchUser = () => {
    const [loading, setLoading] = useState(false);

    const findUser = useCallback(async (username) => {
        setLoading(true);

        try {
            const { data } = await api.get(`${basePath}/${username}`);
            return data;
        } catch (error) {
            return null;
        } finally {
            setLoading(false);
        }
    }, [])

    return {
        loading,
        findUser
    }
}

export default useFetchUser;