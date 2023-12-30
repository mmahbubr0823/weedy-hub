import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";

const ViewBioDataCard = ({ singleData }) => {
    const { BiodataId, BiodataType, Name, ProfileImage, DateOfBirth, Height, Weight, Age, Occupation, Race, FathersName, MothersName, PermanentDivisionName, PresentDivisionName, ContactEmail, MobileNumber } = singleData;
    const handlePremium = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }
    return (
        <div>
            <div className=" h-full w-[400px] bg-[#f7d6f7] flex flex-col p-2 text-gray-700 shadow-md rounded-xl bg-clip-border">
                <div className=" rounded-xl rounded-t-[200px] mx-auto mt-4 p-2 overflow-hidden bg-white shadow-lg bg-clip-border">
                    <img className="w-[150px] h-[150px] outline-double rounded-full" src={ProfileImage} />
                </div>
                <div className="gap-2 mx-auto text-left">
                    <div className="p-3 text-sm">
                        <h1> <span className="font-bold"> BiodataId: </span>{BiodataId || 'null'}</h1>
                        <h1><span className="font-bold"> BiodataType: </span>{BiodataType}</h1>
                        <h1><span className="font-bold">Name: </span>{Name}</h1>
                        <h1> <span className="font-bold"> Fathers Name: </span>{FathersName}</h1>
                        <h1><span className="font-bold"> Mothers Name: </span>{MothersName}</h1>
                        <h1><span className="font-bold"> Occupation: </span>{Occupation}</h1>
                        <h1><span className="font-bold"> Weight: </span>{Weight}</h1>
                        <h1><span className="font-bold"> Date of Birth: </span>{DateOfBirth}</h1>
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
                    <Button onClick={handlePremium} className="bg-[#ec2dc9] w-full text-white" variant="outlined">Make Premium</Button>
                </div>
            </div>
        </div>
    );
};

export default ViewBioDataCard;