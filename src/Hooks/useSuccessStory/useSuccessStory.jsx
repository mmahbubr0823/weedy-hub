import { useQuery } from '@tanstack/react-query';
import { axiosPublic } from '../../api';
const useSuccessStory = () => {
    const {data:story = [], isLoading, isFetching}= useQuery({
        queryKey: ['success'],
        queryFn: async ()=>{
            const res = await axiosPublic.get('/successStory');
            return res.data;
        }
    })
    return [story, isLoading, isFetching]
};

export default useSuccessStory;