import { Link, useParams } from 'react-router-dom';
import Container from '../../Layouts/Container/Container';
import Title from '../../Shared/Title/Title';
import useBioDataDetails from '../../Hooks/useBioDataDetails/useBioDataDetails';
import SimilarGender from './SimilarGender';
import { Button } from '@material-tailwind/react';
import useAxios from '../../Hooks/useAxios/useAxios';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/UswAuth/useAuth';
const MemberDetails = () => {
    const {user} = useAuth();
    const param = useParams();
    const id = param.id;
    const axios = useAxios();
    const {data} = useBioDataDetails(id);
    const {_id, BiodataId, BiodataType, Name, ProfileImage, DateOfBirth, Height, Weight, Age, Occupation, Race, FathersName, MothersName, PermanentDivisionName ,PresentDivisionName, ContactEmail, MobileNumber} = data;

    const handleFavorites = async () => {
        try {
            const sendData = {
                ...data,
                userEmail: user.email
            }
            const postData = await axios.post('/favoritesBiodata', sendData);
            if (postData.data.acknowledged === true) {
                Swal.fire({
                    title: "",
                    text: "Biodata added successfully into favorites",
                    icon: "success"
                });
            }
        }
        catch (error) {
            console.log(error, data);
            Swal.fire({
                title: "",
                text: {error},
                icon: "error"
            });
        }
    }
    return (
            <Container>
            <Title title={'Member Details'}></Title>
                <div className='flex gap-10'>
                <div className=" h-full w-[40%] bg-[#f7d6f7] flex flex-col p-2 text-gray-700 shadow-md rounded-xl bg-clip-border">
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
                        <Button onClick={handleFavorites} className="bg-[#ec2dc9] w-full" variant="outlined">Add Favorite</Button>
                       <Link to={`/checkout/${_id}`}>
                       <Button className="bg-[#ec2dc9] w-full mt-3" variant="outlined">Request Contact Info</Button>
                       </Link>
                    </div>
                </div>
                <div className='w-[60%]'>
                    <SimilarGender BiodataType={BiodataType}></SimilarGender>
                </div>
                </div>
            </Container>
    );
};

export default MemberDetails;