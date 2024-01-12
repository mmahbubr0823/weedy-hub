import { useQuery } from '@tanstack/react-query';
import { axiosPublic } from '../../../api';
import { Card, Typography } from '@material-tailwind/react';

const ManageUsers = () => {
    const {data:user = []}= useQuery({
        queryKey: ['user'],
        queryFn: async ()=>{
            const res = await axiosPublic.get('/users');
            return res.data;
        }
    })
    const TABLE_HEAD = ["#", "User Name", "User Email", "Action", "Action"];
    return (
        <Card className="min-h-[60vh] w-full p-3 overflow-y-scroll bg-[#f6f1e7]">
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
                    {user.map(({ name, email }, index) => (
                        <tr key={name} className="even:bg-blue-gray-50/50">
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-medium">
                                    {index +1}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-medium">
                                    {name}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {email}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography as="a" variant="small" color="blue-gray" className="font-medium">
                                  
                                  <button className='bg-[#e853dc] px-3 py-2 rounded-md text-white'>Make Admin</button>
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography as="a" variant="small" color="blue-gray" className="font-medium">
                                  <button className='bg-[#6053e8] px-3 py-2 rounded-md text-white'>Make Premium</button>
                                </Typography>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
};

export default ManageUsers;