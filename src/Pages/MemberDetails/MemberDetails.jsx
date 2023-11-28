import { useLoaderData } from 'react-router-dom';
import Container from '../../Layouts/Container/Container';
import Title from '../../Shared/Title/Title';

const MemberDetails = () => {
    const loadedData = useLoaderData();
    const { BiodataId, BiodataType, Name, ProfileImage, DateOfBirth, Height, Weight, Age, Occupation, Race, FathersName, MothersName, PermanentDivisionName ,PresentDivisionName, ContactEmail, MobileNumber} = loadedData;

    return (
        <div>
            <Container>
            <Title title={'Member Details'}></Title>
                <div className="relative h-full w-full my-10 bg-[#f7d6f7] flex p-5 items-center gap-5 text-gray-700 shadow-md rounded-xl bg-clip-border">
                    <div className="relative rounded-xl rounded-t-[200px] mx-auto mt-4 p-2 overflow-hidden bg-white shadow-lg bg-clip-border">
                        <img className="w-[400px] h-[400px] outline-double rounded-full" src={ProfileImage} />
                    </div>
                    <div className="flex flex-grow gap-2 text-left">
                        <div className="p-6">
                            <h1> <span className="font-bold"> BiodataId: </span>{BiodataId}</h1>
                            <h1><span className="font-bold"> BiodataType: </span>{BiodataType}</h1>
                            <h1><span className="font-bold">Name: </span>{Name}</h1>
                            <h1> <span className="font-bold"> Fathers Name: </span>{FathersName}</h1>
                            <h1><span className="font-bold"> Mothers Name: </span>{MothersName}</h1>
                            <h1><span className="font-bold"> Occupation: </span>{Occupation}</h1>
                            <h1><span className="font-bold"> Weight: </span>{Weight}</h1>
                            <h1><span className="font-bold"> Date of Birth: </span>{DateOfBirth}</h1>
                        </div>
                        <div className="p-6">

                            <h1><span className="font-bold"> Age: </span>{Age}</h1>
                            <h1><span className="font-bold"> Height: </span>{Height}</h1>
                            <h1><span className="font-bold"> Race: </span>{Race}</h1>
                            <h1><span className="font-bold"> Permanent Division Name: </span>{PermanentDivisionName}</h1>
                            <h1><span className="font-bold"> Present Division Name: </span>{PresentDivisionName}</h1>
                            <h1><span className="font-bold"> Contact Email: </span>{ContactEmail}</h1>
                            <h1><span className="font-bold"> Mobile Number: </span>{MobileNumber}</h1>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MemberDetails;