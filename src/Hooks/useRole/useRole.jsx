import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../api";

const useRole = (email) => {
    const {data = {}, isLoading}= useQuery({
        queryKey: ['role'],
        queryFn: async ()=>{
            const res = await axiosPublic.get(`/users/${email}`);
            return res.data;
        }
    })
    return [data, isLoading ];
};

export default useRole;