import { useQuery } from '@tanstack/react-query';
import { axiosPublic } from '../../api';
const useFavorites = (email) => {
    const {data = [], refetch, isLoading}= useQuery({
        queryKey: ['favorites'],
        queryFn: async ()=>{
            const res = await axiosPublic.get(`/favoritesBiodata/${email}`);
            return res.data;
        }
    })
    return [data, refetch, isLoading ];
};

export default useFavorites;