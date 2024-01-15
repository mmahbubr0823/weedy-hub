import { useQuery } from '@tanstack/react-query';
import { axiosPublic } from '../../api';
import SuccessStoryCards from './SuccessStoryCards';
const SuccessStory = () => {
  const {data = []}= useQuery({
    queryKey: ['success'],
    queryFn: async ()=>{
        const res = await axiosPublic.get('/successStory');
        return res.data;
    }
})
  return (
    <div className='flex flex-row w-full'>
      {
        data.map((singleItem, idx)=> <SuccessStoryCards
        key={idx}
        singleItem={singleItem}
        >
        </SuccessStoryCards>)
      }
    </div>
   
  );
};

export default SuccessStory;