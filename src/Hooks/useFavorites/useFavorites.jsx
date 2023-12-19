import { useQuery } from '@tanstack/react-query';
import useAxios from '../useAxios/useAxios'
const useFavorites = () => {
    const axios = useAxios();
    const {data = [], refetch, isLoading}= useQuery({
        queryKey: ['favorites'],
        queryFn: async ()=>{
            const res = await axios.get('/favoritesBiodata');
            return res.data;
        }
    })
    return [data, refetch, isLoading ];
};

export default useFavorites;