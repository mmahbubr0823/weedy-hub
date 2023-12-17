import useBioData from "../../Hooks/useBioData/useBioData";
import BioDataCard from "../AllBioData/BioDataCard";

const SimilarGender = () => {
    const [data] = useBioData();
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        
                        {
                            data.map(member => <BioDataCard
                                key={member.BiodataId}
                                member={member}
                                data={data}
                            >
                            </BioDataCard>) 
                        }
                        <div> </div>
                    
                    </div>
        </div>
    );
};

export default SimilarGender;