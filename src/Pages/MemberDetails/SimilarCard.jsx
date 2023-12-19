import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const SimilarCard = ({member, data}) => {
    const {_id, BiodataId, BiodataType, ProfileImage, Age, Occupation, PermanentDivisionName } = member;
const id = data.length +1
    return (
        <div>
            <div className="relative h-[350px] w-[200px] mb-2 bg-[#f1e5e5] flex flex-col text-gray-700 shadow-md rounded-xl bg-clip-border">
                <div className="relative rounded-xl rounded-t-[200px] mx-auto mt-4 p-2 overflow-hidden bg-white shadow-lg bg-clip-border">
                    <img className="w-[120px] h-[120px] outline-double rounded-full" src={ProfileImage} />
                </div>
                <div className="flex flex-grow gap-2 text-xs text-left">
                <div className="p-2">
                    <h1> <span className="font-bold"> BiodataId: </span>{BiodataId || id}</h1>
                    <h1><span className="font-bold"> BiodataType: </span>{BiodataType}</h1>
                    <h1><span className="font-bold"> Division Name: </span>{PermanentDivisionName}</h1>
                </div>
                <div className="p-2">
               
                    <h1><span className="font-bold"> Age: </span>{Age}</h1>
                    <h1><span className="font-bold"> Occupation: </span>{Occupation}</h1>
                </div>
                </div>
               <div className="flex mb-4 justify-center">
               <Link to={`/members/${_id}`}>
               <Button className="bg-[#ec2dc9]" variant="outlined">View Profile</Button>
               </Link>
               </div>
            </div>
        </div>
    );
};

export default SimilarCard;