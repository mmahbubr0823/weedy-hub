import { Card, Typography } from "@material-tailwind/react";
import  './favorites.css'
import useAuth from "../../../../../Hooks/UswAuth/useAuth";
import useFavorites from "../../../../../Hooks/useFavorites/useFavorites";
const FavoriteBiodata = () => {
    const {user} = useAuth();
    const TABLE_HEAD = ["#", "Name", "Biodata Id", "Permanent Address", "Occupation", "Action"];
    const [data] = useFavorites(user.email);  
    return (
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
                    {data.map(({ Name, BiodataId, PermanentDivisionName, Occupation }, index) => (
                        <tr key={Name} className="even:bg-blue-gray-50/50">
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-medium">
                                    {index +1}
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
                                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                  Delete
                                </Typography>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
};

export default FavoriteBiodata;