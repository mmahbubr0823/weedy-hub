import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Title from "../../Shared/Title/Title";

const Page404 = () => {
    return (
        <div>
            <Title title={'Page404'}></Title>
            <Link to={'/'}>
                <button className="bg-[#eb27da] px-4 py-1 rounded-lg text-white ml-5 mt-5"><FaArrowLeft></FaArrowLeft>Home</button>
            </Link>
            <div className="flex justify-center items-center my-16">
                <img className=" w-[600px] h-[600] rounded-2xl" src="https://i.ibb.co/9T8ykCT/222468-P1-PZG2-870.jpg" alt="" />
            </div>
        </div>
    );
};

export default Page404;