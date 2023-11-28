import { useForm } from "react-hook-form";
import useBioData from "../../Hooks/useBioData/useBioData";
import Container from "../../Layouts/Container/Container";
import BioDataCard from "./BioDataCard";
import { useState } from "react";
import { Spinner } from "@material-tailwind/react";
import useAuth from "../../Hooks/UswAuth/useAuth";

const AllBioData = () => {
     const {loading} = useAuth();
    const [data] = useBioData();
    const [filteredMembers, setFilteredMembers] = useState(data);
    const { register, handleSubmit } = useForm();
    const gender = ['Male', 'Female'];
    console.log(data);
    if(loading){
        return <Spinner className="h-16 w-16 text-gray-900/50 mx-auto my-10" />;
    }
    const onSubmit = (e) => {
        // console.log(data.gender);
        const fieldData = e.gender;
        const filteredData = data.filter(item => item.BiodataType === fieldData);
        setFilteredMembers(filteredData)
    }
    
    return (
        <Container>
            <div>
                <div className='flex justify-between'>
                    <div>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h1>Search by gender</h1>
                                <select {...register("gender", { required: true })} className="w-40 p-2 rounded">
                                    <option defaultValue={'select'}>select</option>
                                    {
                                        gender.map((gen, index) => <option key={index}>
                                            {
                                                gen
                                            }
                                        </option>)
                                    }
                                </select>
                                <input className="bg-[#ec59ef] py-[6px] rounded-md text-white px-3" type="submit" value={'Search'} />
                            </form>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className='text-3xl font-bold mb-3'>Find Your B<span className='text-[#ed43f6]'>e</span>lov<span className='text-[#ed43f6]'>e</span>d!</h1>
                        <p className='text-sm text-gray-500'>Find Your Beloved encapsulates the essence of discovering <br /> a cherished life partner. The phrase evokes a sense of deep connection and emphasizes <br /> the journey to finding someone truly special and cherished.</p>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10'>
                    {
                        filteredMembers.map(member => <BioDataCard
                            key={member.BiodataId}
                            member={member}
                            data={data}
                        >
                        </BioDataCard>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default AllBioData;