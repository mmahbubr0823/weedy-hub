import { useQuery } from '@tanstack/react-query';
import { axiosPublic } from '../../api';
const useBioData = () => {
    const {data = [], refetch, isLoading}= useQuery({
        queryKey: ['members'],
        queryFn: async ()=>{
            const res = await axiosPublic.get('/members');
            return res.data;
        }
    })
    return [data, refetch, isLoading ];
};

export default useBioData;