import { useQuery } from '@tanstack/react-query';
import useAxios from '../useAxios/useAxios';

const useBioDataDetails = (id) => {
    const axios = useAxios();
    const {data={}, refetch} = useQuery({
        queryKey: ['bioDataDetails'],
        queryFn: async ()=>{
            const res = await axios.get(`/members/${id}`);
            return res.data;
        }
    })
    return {data, refetch};
};

export default useBioDataDetails;