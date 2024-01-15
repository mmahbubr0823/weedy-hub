import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';
const SuccessStoryCards = ({ singleItem }) => {
  return (
    <Marquee
    pauseOnHover={true}>
      <div className="relative p-8 mb-2 flex flex-col md:flex-col mx-auto  items-center text-gray-700">
        <div className="relative w-1/2 rounded-xl text-center mt-4 p-2 overflow-hidden">
          <img className="md:w-[200px] md:h-[200px] rounded-xl" src={singleItem.ProfileImage} />
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
              Embrace Loves Journey: Your Perfect Match Awaits invites users to embark on the exciting adventure of finding their life partner. The title emphasizes the idea of embracing the process of discovering love, suggesting that within the platform, users will find someone who perfectly complements their journey, creating a fulfilling and lasting connection.
            </h1>
          </div>
        </div>

      </div>

    </Marquee>
  );
};

export default SuccessStoryCards;