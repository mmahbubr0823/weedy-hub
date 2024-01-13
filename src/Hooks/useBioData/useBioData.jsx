import { useQuery } from '@tanstack/react-query';
import { axiosPublic } from '../../api';
const useBioData = () => {
    const {data = [], isLoading}= useQuery({
        queryKey: ['members'],
        queryFn: async ()=>{
            const res = await axiosPublic.get('/members');
            return res.data;
        }
    })
    return [data, isLoading ];
};

export default useBioData;