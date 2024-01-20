import { Card, Spinner, Typography } from "@material-tailwind/react";
import './favorites.css'
import useAuth from "../../../../../Hooks/UswAuth/useAuth";
import useFavorites from "../../../../../Hooks/useFavorites/useFavorites";
import Title from "../../../../../Shared/Title/Title";
import { axiosPublic } from "../../../../../api";
import Swal from "sweetalert2";
const FavoriteBiodata = () => {
    const { user } = useAuth();
    const [data, isLoading, refetch] = useFavorites(user.email);
    if (isLoading) {
        return <Spinner className="h-16 w-16 text-gray-900/50 mx-auto my-10" />
    }
    const TABLE_HEAD = ["#", "Name", "Biodata Id", "Permanent Address", "Occupation", "Action"];
    const handleDelete = async (id) => {
        try {
            const { data } = await axiosPublic.delete(`/favoritesBiodata/${id}`);
            console.log(data);
            refetch();
            if (data.deletedCount > 0) {
                Swal.fire({
                    title: "",
                    text: "Contact request has deleted successfully.",
                    icon: "success"
                });
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <Title title={'Favorite BioData'}></Title>
            {
                data.length > 0 ?
                    <Card className="min-h-[60vh] w-full p-3 overflow-scroll">
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-medium leading-none opacity-70"
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(({ _id, Name, BiodataId, PermanentDivisionName, Occupation }, index) => (
                                    <tr key={Name} className="even:bg-blue-gray-50/50">
                                        <td className="p-4">
                                            <Typography variant="small" color="blue-gray" className="font-medium">
                                                {index + 1}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography variant="small" color="blue-gray" className="font-medium">
                                                {Name}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {BiodataId}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {PermanentDivisionName}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {Occupation}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography as="a" variant="small" color="blue-gray" className="font-medium">
                                                <button onClick={() => handleDelete(_id)} className='bg-[#6053e8] px-3 py-2 rounded-md text-white'>Delete</button>
                                            </Typography>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Card>
                    :
                    <h1>You havent chosen any item as favorite</h1>
            }
        </div>
    );
};

export default FavoriteBiodata;