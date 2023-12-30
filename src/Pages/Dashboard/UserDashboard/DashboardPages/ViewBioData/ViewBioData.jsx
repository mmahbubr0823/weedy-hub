import { useEffect, useState } from "react";
import useBioData from "../../../../../Hooks/useBioData/useBioData";
import useAuth from "../../../../../Hooks/UswAuth/useAuth";
import ViewBioDataCard from "./ViewBioDataCard";

const ViewBioData = () => {
    const [data] = useBioData();
    const { user } = useAuth();
    const [viewData, setViewData] = useState([]);
    useEffect(() => {
        const filtered = data?.filter(item => item.ContactEmail === user.email);
        setViewData(filtered);
    }, [data, user.email])
    return (
        <div>
                <div>
                    {
                        viewData.map((singleData, idx) => <ViewBioDataCard
                        key={idx}
                        singleData={singleData}
                        >
                        </ViewBioDataCard>)
                    }
                </div> 
        </div>
    );
};

export default ViewBioData;