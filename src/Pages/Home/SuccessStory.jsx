import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
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
    <div>
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