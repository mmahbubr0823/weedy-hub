import { useQuery } from '@tanstack/react-query';
import { axiosPublic } from '../../api';
const usePremium = () => {
    const {data:premiumUser = [], isLoading, refetch}= useQuery({
        queryKey: ['premiumBioData'],
        queryFn: async ()=>{
            const res = await axiosPublic.get('/premiumBioData');
            return res.data;
        }
    })
    return [premiumUser, refetch, isLoading ];
};

export default usePremium;