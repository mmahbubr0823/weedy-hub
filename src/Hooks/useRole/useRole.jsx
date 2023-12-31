import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../api";

const useRole = (email) => {
    const {data:userRole = {}, isLoading}= useQuery({
        queryKey: ['role'],
        queryFn: async ()=>{
            const res = await axiosPublic.get(`/users/${email}`);
            return res.data;
        }
    })
    return [userRole, isLoading ];
};

export default useRole;