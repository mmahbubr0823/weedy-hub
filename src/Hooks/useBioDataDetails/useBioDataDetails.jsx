import { useQuery } from '@tanstack/react-query';
import { axiosPublic } from '../../api';
const useBioDataDetails = (id) => {
    const {data={}, refetch} = useQuery({
        queryKey: ['bioDataDetails'],
        queryFn: async ()=>{
            const res = await axiosPublic.get(`/members/${id}`);
            return res.data;
        }
    })
    return {data, refetch};
};

export default useBioDataDetails;