import { useQuery } from '@tanstack/react-query';
import { axiosPublic } from '../../../api';
import { Card, Spinner, Typography } from '@material-tailwind/react';
import Title from '../../../Shared/Title/Title';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/UswAuth/useAuth';
import useRole from '../../../Hooks/useRole/useRole';

const ApprovedContactRequest = () => {
    const {user} = useAuth();
    const [userRole] = useRole(user.email);
    console.log(useRole.role);
    const {data:contactedUser = [], isLoading, refetch}= useQuery({
        queryKey: ['contactRequests'],
        queryFn: async ()=>{
            const res = await axiosPublic.get('/contactRequests');
            return res.data;
        }
    })
    if (isLoading) {
        return <Spinner className="h-16 w-16 text-gray-900/50 mx-auto my-10" />
    }
    const handleContactRequest= async(email)=>{
        try{
            const {data} = await axiosPublic.patch(`/users/makePremium/${email}`);
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
    const TABLE_HEAD = ["#", "User Name", "User Email", "BioData Id", "Action"];
    return (
        <Card className="min-h-[60vh] w-full p-3 overflow-y-scroll bg-[#ebf6e7]">
             <Title title={'Approve Contact Request'}></Title>
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
                    {contactedUser.map(({ Name, selfEmail, BiodataId }, index) => (
                        <tr key={selfEmail} className="even:bg-blue-gray-50/50">
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
                                    {selfEmail}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography as="a" variant="small" color="blue-gray" className="font-medium">
                                  
                                 {BiodataId}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography as="a" variant="small" color="blue-gray" className="font-medium">
                                  <button  
                                  onClick={()=>handleContactRequest(selfEmail)} className='bg-[#6053e8] px-3 py-2 rounded-md text-white'>
                                    {
                                        userRole.role === 'premium'
                                         ? 
                                        'Approved'
                                        :
                                        ' Approve Request'
                                    }
                                    </button>
                                </Typography>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
};

export default ApprovedContactRequest;