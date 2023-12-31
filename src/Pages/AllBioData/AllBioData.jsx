import { useForm } from "react-hook-form";
import useBioData from "../../Hooks/useBioData/useBioData";
import Container from "../../Layouts/Container/Container";
import BioDataCard from "./BioDataCard";
import { useState } from "react";
import Pagination from "./Pagination";
// import { Spinner } from "@material-tailwind/react";
// import useAuth from "../../Hooks/UswAuth/useAuth";

const AllBioData = () => {
    // const { loading } = useAuth();
    const [data] = useBioData();
    const [filteredMembers, setFilteredMembers] = useState(data);
    const { register, handleSubmit} = useForm();
    const { register: register2, handleSubmit: handleSubmit2 } = useForm();
    const gender = ['Male', 'Female'];
    const divisions = ['Dhaka', 'Rangpur', 'Barisal', 'Khulna', 'Sylhet', 'Maymansign', 'Rajshahi', 'Chattagram'];
    
    const onSubmit = (e) => {
        const sex = e.gender;
        const residence = e.division;
        if (sex === 'Male' || sex === 'Female') {
            const filteredData = data?.filter(item => item.BiodataType === sex);
            setFilteredMembers(filteredData);
        }
        else {
            const filteredData = data?.filter(item => item.PermanentDivisionName === residence);
            setFilteredMembers(filteredData);
        }


    }
    return (
        <Container>
            <div className="text-center my-10 relative">
                <h1 className='text-3xl font-bold mb-3'>Find Your B<span className='text-[#ed43f6]'>e</span>lov<span className='text-[#ed43f6]'>e</span>d!</h1>
                <p className='text-sm text-gray-500'>Find Your Beloved encapsulates the essence of discovering <br /> a cherished life partner. The phrase evokes a sense of deep connection and emphasizes <br /> the journey to finding someone truly special and cherished.</p>
            </div>
            <div className="min-h-[40vh] flex gap-3 relative">
                <div className=' flex flex-col w-[25%]'>
                    <div className="bg-gray-50 min-h-[60vh] space-y-3 mx-auto p-5 rounded-md fixed top-[20vh]">
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h1>Search by gender</h1>
                                <select {...register("gender", { required: true })} className="w-40 p-2 rounded">
                                    <option selected disabled hidden>Please select</option>
                                    {
                                        gender.map((gen, index) => <option key={index}>
                                            {
                                                gen
                                            }
                                        </option>)
                                    }
                                </select>
                                <input className="bg-[#ec59ef] ml-2 hover:cursor-pointer py-[6px] rounded-md text-white px-3" type="submit" value={'Search'} />

                            </form>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit2(onSubmit)}>
                                <h1>Search by division</h1>
                                <select {...register2("division", { required: true })} className="w-40 p-2 rounded">
                                    <option selected disabled hidden>Please select</option>
                                    {
                                        divisions.map((division, index) => <option key={index}>
                                            {
                                                division
                                            }
                                        </option>)
                                    }
                                </select>
                                <input className="bg-[#ec59ef] ml-2 hover:cursor-pointer py-[6px] rounded-md text-white px-3" type="submit" value={'Search'} />
                            </form>
                        </div>
                    </div>

                </div>
                <div className="w-[75%]">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        
                        {
                    
                        filteredMembers.length > 0 ?
                            filteredMembers.map(member => <BioDataCard
                                key={member.BiodataId}
                                member={member}
                                data={data}
                            >
                            </BioDataCard>) :
                            <h1 className="text-3xl my-5 text-center">
                                No Items Found
                            </h1>
                        }
                        <div> </div>
                    
                    </div>
                    <Pagination></Pagination>
                </div>
            </div>
        </Container>
    );
};

export default AllBioData;