import { useQuery } from '@tanstack/react-query';
import { axiosPublic } from '../../api';
const useFavorites = (email) => {
    const {data = [], isLoading}= useQuery({
        queryKey: ['favorites'],
        queryFn: async ()=>{
            const res = await axiosPublic.get(`/favoritesBiodata/${email}`);
            return res.data;
        }
    })
    return [data, isLoading ];
};

export default useFavorites;