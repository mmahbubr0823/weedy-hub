import axios from "axios";
import useAuth from "../Hooks/UswAuth/useAuth";

export const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})
axiosPublic.interceptors.response.use(
    response => response,
    async error => {
        const { logOut } = useAuth();
        if (
            error.response &&
            (error.response.status === 401 || error.response.status === 403)
        ) {
            await logOut()
            window.location.replace('/login')
        }

        return Promise.reject(error)
    }
)
