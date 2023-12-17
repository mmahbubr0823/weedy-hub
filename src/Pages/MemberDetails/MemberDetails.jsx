import { useParams } from 'react-router-dom';
import Container from '../../Layouts/Container/Container';
import Title from '../../Shared/Title/Title';
import useBioDataDetails from '../../Hooks/useBioDataDetails/useBioDataDetails';
import SimilarGender from './SimilarGender';
import { Button } from '@material-tailwind/react';

const MemberDetails = () => {
    const param = useParams();
    const id = param.id;
    const {data} = useBioDataDetails(id);
    const { BiodataId, BiodataType, Name, ProfileImage, DateOfBirth, Height, Weight, Age, Occupation, Race, FathersName, MothersName, PermanentDivisionName ,PresentDivisionName, ContactEmail, MobileNumber} = data;

    return (
            <Container>
            <Title title={'Member Details'}></Title>
                <div className='flex gap-3'>
                <div className=" h-full w-[25%] bg-[#f7d6f7] flex flex-col p-5 items-center gap-5 text-gray-700 shadow-md rounded-xl bg-clip-border">
                    <div className=" rounded-xl rounded-t-[200px] mx-auto mt-4 p-2 overflow-hidden bg-white shadow-lg bg-clip-border">
                        <img className="w-[150px] h-[150px] outline-double rounded-full" src={ProfileImage} />
                    </div>
                    <div className="gap-2 text-left">
                        <div className="p-3 text-sm">
                            <h1> <span className="font-bold"> BiodataId: </span>{BiodataId}</h1>
                            <h1><span className="font-bold"> BiodataType: </span>{BiodataType}</h1>
                            <h1><span className="font-bold">Name: </span>{Name}</h1>
                            <h1> <span className="font-bold"> Fathers Name: </span>{FathersName}</h1>
                            <h1><span className="font-bold"> Mothers Name: </span>{MothersName}</h1>
                            <h1><span className="font-bold"> Occupation: </span>{Occupation}</h1>
                            <h1><span className="font-bold"> Weight: </span>{Weight}</h1>
                            <h1><span className="font-bold"> Date of Birth: </span>{DateOfBirth}</h1>
                        </div>
                        <div className="p-3 text-sm">

                            <h1><span className="font-bold"> Age: </span>{Age}</h1>
                            <h1><span className="font-bold"> Height: </span>{Height}</h1>
                            <h1><span className="font-bold"> Race: </span>{Race}</h1>
                            <h1><span className="font-bold"> Permanent Division Name: </span>{PermanentDivisionName}</h1>
                            <h1><span className="font-bold"> Present Division Name: </span>{PresentDivisionName}</h1>
                            <h1><span className="font-bold"> Contact Email: </span>{ContactEmail}</h1>
                            <h1><span className="font-bold"> Mobile Number: </span>{MobileNumber}</h1>
                        </div>
                    </div>
                    <div>
                        <Button className="bg-[#ec2dc9] w-full" variant="outlined">Add Favorite</Button>
                       <Button className="bg-[#ec2dc9] w-full mt-3" variant="outlined">Request Contact Info</Button>
                    </div>
                </div>
                <div className='w-[75%]'>
                    <SimilarGender></SimilarGender>
                </div>
                </div>
            </Container>
    );
};

export default MemberDetails;