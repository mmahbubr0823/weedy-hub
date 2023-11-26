import { Carousel, IconButton  } from '@material-tailwind/react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const SuccessStory = () => {
    return (
        <div>
            <Carousel
            prevArrow={({ handlePrev }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handlePrev}
                  className="!absolute top-2/4 left-4 -translate-y-2/4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  variant="text"
                  color="white"
                  size="lg"
                  onClick={handleNext}
                  className="!absolute top-2/4 !right-4 -translate-y-2/4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </IconButton>
              )}
            >
            {/* <div className="relative p-8 mb-2 bg-[#f7d6f7] flex items-center w-full text-gray-700 shadow-md rounded-xl bg-clip-border">
                <div className="relative w-1/2 rounded-xl mx-auto mt-4 p-2 overflow-hidden  bg-clip-border">
                    <img className="w-[300px] h-[300px] rounded-xl" src={'https://i.ibb.co/2gQhc8d/beautiful-woman-long-red-dress-walks-around-city-with-her-husband-1.jpg'} />
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
                
            </div> */}
             <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
           
            
            </Carousel>
        </div>
    );
};

export default SuccessStory;