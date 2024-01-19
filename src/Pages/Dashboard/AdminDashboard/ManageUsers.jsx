import { useQuery } from '@tanstack/react-query';
import { axiosPublic } from '../../../api';
import { Card, Spinner, Typography } from '@material-tailwind/react';
import Title from '../../../Shared/Title/Title';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const {data:user = [], isLoading, refetch}= useQuery({
        queryKey: ['user'],
        queryFn: async ()=>{
            const res = await axiosPublic.get('/users');
            return res.data;
        }
    })
    if (isLoading) {
        return <Spinner className="h-16 w-16 text-gray-900/50 mx-auto my-10" />
    }
    // make admin 
     const handleAdmin= async(name, email, photo, role, status)=>{
        const userData = {name, email, photo, role, status}
        try{
            const {data} = await axiosPublic.patch(`/users/makeAdmin/${email}`, userData);
            refetch();
            if (data.acknowledged === true) {
                Swal.fire({
                    title: "",
                    text: "User has made admin successfully.",
                    icon: "success"
                });
            }
        }
        catch(err){
            console.log(err);
        }
     }
    //  make premium 
     const handlePremium= async(name, email, photo, role, status)=>{
        const userData = {name, email, photo, role, status}
        try{
            const {data} = await axiosPublic.patch(`/users/makePremium/${email}`, userData);
            refetch();
            if (data.acknowledged === true) {
                Swal.fire({
                    title: "",
                    text: "User has made premium successfully.",
                    icon: "success"
                });
            }
        }
        catch(err){
            console.log(err);
        }
     }
    const TABLE_HEAD = ["#", "User Name", "User Email", "Action", "Action"];
    return (
        <Card className="min-h-[60vh] w-full p-3 overflow-y-scroll bg-[#f2e6f6]">
             <Title title={'Manage Users'}></Title>
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
                    {user.map(({ name, email , photo, role, status}, index) => (
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
                                  
                                  <button disabled={role=== 'admin'} onClick={()=>handleAdmin(name, email, photo, role, status)} className='bg-[#ed1ddc] px-3 py-2 rounded-md text-white'>Make Admin</button>
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography as="a" variant="small" color="blue-gray" className="font-medium">
                                  <button disabled={role=== 'premium'} onClick={()=>handlePremium(name, email, photo, role, status)} className='bg-[#6053e8] px-3 py-2 rounded-md text-white'>Make Premium</button>
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