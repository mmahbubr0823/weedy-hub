import { useEffect, useState } from "react";
import useBioData from "../../../../../Hooks/useBioData/useBioData";
import useAuth from "../../../../../Hooks/UswAuth/useAuth";
import ViewBioDataCard from "./ViewBioDataCard";
import { Spinner } from "@material-tailwind/react";

const ViewBioData = () => {
    const [data, isLoading] = useBioData();
    const { user } = useAuth();
    const [viewData, setViewData] = useState([]);
    useEffect(() => {
        const filtered = data?.filter(item => item.ContactEmail === user.email);
        setViewData(filtered);
    }, [data, user.email])
    if (isLoading) {
        return <Spinner className="h-16 w-16 text-gray-900/50 mx-auto my-10" />
    }
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