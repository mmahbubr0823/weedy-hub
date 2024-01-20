import { Card, Spinner, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../../../api";
import useAuth from "../../../../Hooks/UswAuth/useAuth";
import Swal from "sweetalert2";
import useRole from "../../../../Hooks/useRole/useRole";
const TABLE_HEAD = ["#", "Name", "Biodata Id", "Status", "Mobile No", "Email", "Action"];
const ContactRequest = () => {
    const { user } = useAuth();
    const [userRole] = useRole(user.email)
    const { data: contactPerson = [], isLoading, refetch } = useQuery({
        queryKey: ['contactRequest'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/contactRequests/${user.email}`);
            return res.data;
        }
    })
    if (isLoading) {
        return <Spinner className="h-16 w-16 text-gray-900/50 mx-auto my-10" />
    }
    const handleDelete = async (id) => {
        try {
            // const idInt = parseInt(id);
            const { data } = await axiosPublic.delete(`/contactRequests/${id}`);
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
        <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-bold leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {contactPerson.map(({ _id, Name, BiodataId, MobileNumber, ContactEmail }, index) => (
                        <tr key={name} className="even:bg-blue-gray-50/50">
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {index + 1}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {Name}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {BiodataId}
                                </Typography>
                            </td>
                            <td >
                                {
                                    userRole.role === 'premium' ?
                                        <td className="p-4 border-0">
                                            <Typography as="a" href="#" variant="small" color="blue-gray" className="font-normal">
                                                Accepted
                                            </Typography>
                                        </td>
                                        :
                                        <td className="p-4 border-0">
                                            <Typography as="a" href="#" variant="small" color="blue-gray" className="font-normal">
                                                Pending
                                            </Typography>
                                        </td>
                                }
                            </td>

                            <td >
                                {
                                    userRole.role === 'premium' ?
                                        <td className="p-4 border-0">
                                            <Typography as="a" href="#" variant="small" color="blue-gray" className="font-normal">
                                                {MobileNumber}
                                            </Typography>
                                        </td>
                                        :
                                        <>
                                            <p className="text-center">----</p>
                                        </>
                                }
                            </td>
                            <td>
                                {
                                    userRole.role === 'premium' ?
                                        <td className="p-4 border-0">
                                            <Typography as="a" variant="small" color="blue-gray" className="font-normal">
                                                {ContactEmail}
                                            </Typography>
                                        </td>
                                        :
                                        <>
                                            <p className="text-center">----</p>
                                        </>
                                }
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
    );
};

export default ContactRequest;