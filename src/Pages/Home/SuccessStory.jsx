import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const SuccessStory = () => {
  return (

    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper my-10"
    >
      <SwiperSlide>
        <div>

          <div className="relative p-8 mb-2 bg-[#eee7e4] flex flex-col md:flex-row items-center w-full text-gray-700 shadow-md rounded-xl bg-clip-border">
            <div className="relative w-1/2 rounded-xl mx-auto mt-4 p-2 overflow-hidden  bg-clip-border">
              <img className="md:w-[300px] md:h-[300px] rounded-xl" src={'https://i.ibb.co/2gQhc8d/beautiful-woman-long-red-dress-walks-around-city-with-her-husband-1.jpg'} />
            </div>
            <div className="w-1/2 gap-2 text-left">
              <h1 className='text-xl font-bold mb-2'>About success</h1>
              <div className="">
                <h1> <span className="font-bold"> Marriage Date: </span>12/04/2023</h1>
                <h1 className='flex text-yellow-500 my-3'>
                  <span className="font-bold"> <FaStar></FaStar> </span>
                  <span className="font-bold"> <FaStar></FaStar> </span>
                  <span className="font-bold"> <FaStar></FaStar> </span>
                  <span className="font-bold"> <FaStar></FaStar> </span>
                  <span className="font-bold"> <FaStarHalfAlt ></FaStarHalfAlt > </span>
                </h1>
                <h1 className='text-sm'><span className="font-bold"> Story: </span>
                  Embrace Love's Journey: Your Perfect Match Awaits invites users to embark on the exciting adventure of finding their life partner. The title emphasizes the idea of embracing the process of discovering love, suggesting that within the platform, users will find someone who perfectly complements their journey, creating a fulfilling and lasting connection.
                </h1>
              </div>
            </div>

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>

          <div className="relative p-8 mb-2 bg-[#eee7e4] flex flex-col md:flex-row items-center w-full text-gray-700 shadow-md rounded-xl bg-clip-border">
            <div className="relative w-1/2 rounded-xl mx-auto mt-4 p-2 overflow-hidden  bg-clip-border">
              <img className="md:w-[300px] md:h-[300px] rounded-xl" src={'https://i.ibb.co/2gQhc8d/beautiful-woman-long-red-dress-walks-around-city-with-her-husband-1.jpg'} />
            </div>
            <div className="w-1/2 gap-2 text-left">
              <h1 className='text-xl font-bold mb-2'>About success</h1>
              <div className="">
                <h1> <span className="font-bold"> Marriage Date: </span>12/04/2023</h1>
                <h1 className='flex text-yellow-500 my-3'>
                  <span className="font-bold"> <FaStar></FaStar> </span>
                  <span className="font-bold"> <FaStar></FaStar> </span>
                  <span className="font-bold"> <FaStar></FaStar> </span>
                  <span className="font-bold"> <FaStar></FaStar> </span>
                  <span className="font-bold"> <FaStarHalfAlt ></FaStarHalfAlt > </span>
                </h1>
                <h1 className='text-sm'><span className="font-bold"> Story: </span>
                  Embrace Love's Journey: Your Perfect Match Awaits invites users to embark on the exciting adventure of finding their life partner. The title emphasizes the idea of embracing the process of discovering love, suggesting that within the platform, users will find someone who perfectly complements their journey, creating a fulfilling and lasting connection.
                </h1>
              </div>
            </div>

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>

          <div className="relative p-8 mb-2 bg-[#eee7e4] flex flex-col md:flex-row items-center w-full text-gray-700 shadow-md rounded-xl bg-clip-border">
            <div className="relative w-1/2 rounded-xl mx-auto mt-4 p-2 overflow-hidden  bg-clip-border">
              <img className="md:w-[300px] md:h-[300px] rounded-xl" src={'https://i.ibb.co/2gQhc8d/beautiful-woman-long-red-dress-walks-around-city-with-her-husband-1.jpg'} />
            </div>
            <div className="w-1/2 gap-2 text-left">
              <h1 className='text-xl font-bold mb-2'>About success</h1>
              <div className="">
                <h1> <span className="font-bold"> Marriage Date: </span>12/04/2023</h1>
                <h1 className='flex text-yellow-500 my-3'>
                  <span className="font-bold"> <FaStar></FaStar> </span>
                  <span className="font-bold"> <FaStar></FaStar> </span>
                  <span className="font-bold"> <FaStar></FaStar> </span>
                  <span className="font-bold"> <FaStar></FaStar> </span>
                  <span className="font-bold"> <FaStarHalfAlt ></FaStarHalfAlt > </span>
                </h1>
                <h1 className='text-sm'><span className="font-bold"> Story: </span>
                  Embrace Love's Journey: Your Perfect Match Awaits invites users to embark on the exciting adventure of finding their life partner. The title emphasizes the idea of embracing the process of discovering love, suggesting that within the platform, users will find someone who perfectly complements their journey, creating a fulfilling and lasting connection.
                </h1>
              </div>
            </div>

          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SuccessStory;