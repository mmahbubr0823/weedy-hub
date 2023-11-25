import { Button } from "@material-tailwind/react";
const PremiumCard = ({ member }) => {
    console.log(...Object.keys(member));
const {_id, BiodataId, BiodataType, ProfileImage, PermanentDivisionName, Age, Occupation} = member;

    return (
        <div>
            <div className="relative h-[450px] mb-2 bg-[#f7d6f7] flex flex-col text-gray-700 shadow-md w-96 rounded-xl bg-clip-border">
                <div className="relative rounded-xl rounded-t-[200px] mx-auto mt-4 p-2 overflow-hidden bg-white shadow-lg bg-clip-border">
                    <img className="w-[200px] h-[200px] outline-double rounded-full" src={ProfileImage} />
                </div>
                <div className="flex flex-grow gap-2 text-left">
                <div className="p-6">
                    <h1> <span className="font-bold"> BiodataId: </span>{BiodataId}</h1>
                    <h1><span className="font-bold"> BiodataType: </span>{BiodataType}</h1>
                    <h1><span className="font-bold"> Division Name: </span>{PermanentDivisionName}</h1>
                </div>
                <div className="p-6">
               
                    <h1><span className="font-bold"> Age: </span>{Age}</h1>
                    <h1><span className="font-bold"> Occupation: </span>{Occupation}</h1>
                </div>
                </div>
               <div className="flex mb-2 justify-center">
               <Button className="bg-[#ec2dc9]" variant="outlined">View Profile</Button>
               </div>
            </div>
        </div>
    );
};

export default PremiumCard;