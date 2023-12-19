import { useEffect, useState } from "react";
import useBioData from "../../Hooks/useBioData/useBioData";
import BioDataCard from "../AllBioData/BioDataCard";
import SimilarCard from "./SimilarCard";

const SimilarGender = ({ BiodataType }) => {
    const [data] = useBioData();
    const [similarData, setSimilarData] = useState(data);
    useEffect(() => {
        const filteredData = data.filter(singleData => singleData.BiodataType === BiodataType);
        setSimilarData(filteredData);
    }, [data, BiodataType])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>

                {
                    similarData.map((member, idx) => <SimilarCard
                        key={idx}
                        member={member}
                        data={data}
                    >
                    </SimilarCard>)
                }
                <div> </div>

            </div>
        </div>
    );
};

export default SimilarGender;