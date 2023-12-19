import { useQuery } from '@tanstack/react-query';
import useAxios from '../useAxios/useAxios'
const useContactInfo = () => {
    const axios = useAxios();
    const {data = [], refetch, isLoading}= useQuery({
        queryKey: ['members'],
        queryFn: async ()=>{
            const res = await axios.get('/contactRequests');
            return res.data;
        }
    })
    return [data, refetch, isLoading ];
};

export default useContactInfo;