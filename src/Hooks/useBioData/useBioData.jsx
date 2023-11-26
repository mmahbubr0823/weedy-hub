import { useQuery } from '@tanstack/react-query';
import useAxios from '../useAxios/useAxios'
const useBioData = () => {
    const axios = useAxios();
    const {data = [], refetch, isLoading}= useQuery({
        queryKey: ['members'],
        queryFn: async ()=>{
            const res = await axios.get('/members');
            return res.data;
        }
    })
    return [data, refetch, isLoading ];
};

export default useBioData;