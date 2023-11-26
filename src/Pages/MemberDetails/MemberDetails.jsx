import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from '../../Layouts/Container/Container';
import Title from '../../Shared/Title/Title';

const MemberDetails = () => {
    const loadedData = useLoaderData();
    const { BiodataId, BiodataType, ProfileImage, PermanentDivisionName, Age, Occupation } = loadedData;

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
                            <h1><span className="font-bold"> Division Name: </span>{PermanentDivisionName}</h1>
                        </div>
                        <div className="p-6">

                            <h1><span className="font-bold"> Age: </span>{Age}</h1>
                            <h1><span className="font-bold"> Occupation: </span>{Occupation}</h1>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default MemberDetails;