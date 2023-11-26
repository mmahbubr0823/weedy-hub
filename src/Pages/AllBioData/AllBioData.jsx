import useBioData from "../../Hooks/useBioData/useBioData";
import Container from "../../Layouts/Container/Container";
import BioDataCard from "./BioDataCard";

const AllBioData = () => {
    const [data] = useBioData();
    return (
       <Container>
         <div>
        <div className='text-center'>
            <h1 className='text-3xl font-bold mb-3'>Find Your B<span className='text-[#ed43f6]'>e</span>lov<span className='text-[#ed43f6]'>e</span>d!</h1>
            <p className='text-sm text-gray-500'>Find Your Beloved encapsulates the essence of discovering <br /> a cherished life partner. The phrase evokes a sense of deep connection and emphasizes <br /> the journey to finding someone truly special and cherished.</p>
        </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
            {
                data.map(member =><BioDataCard
                key={member.BiodataId}
                member={member}
                >
                </BioDataCard>)
            }
        </div>
       </div>
       </Container>
    );
};

export default AllBioData;