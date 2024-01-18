import { Card, Spinner, Typography } from "@material-tailwind/react";
import usePremium from "../../../Hooks/usePremium/usePremium";
import Title from "../../../Shared/Title/Title";

const ApprovedPremium = () => {
    const [premiumUser, isLoading] = usePremium();
    const TABLE_HEAD = ["#", "User Name", "User Email", "BioData Id", "Action"];
    if (isLoading) {
        return <Spinner className="h-16 w-16 text-gray-900/50 mx-auto my-10" />
    }
    return (
        <Card className="min-h-[60vh] w-full p-3 overflow-y-scroll bg-[#f6f1e7]">
             <Title title={'Approve Premium'}></Title>
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
                    {premiumUser.map(({ Name, ContactEmail }, index) => (
                        <tr key={index} className="even:bg-blue-gray-50/50">
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
                                    {ContactEmail}
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

export default ApprovedPremium;