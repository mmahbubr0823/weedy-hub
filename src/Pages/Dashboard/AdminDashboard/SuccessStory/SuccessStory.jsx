import { Card, Typography, Button, Dialog, DialogBody, DialogHeader, DialogFooter, Spinner } from "@material-tailwind/react";
import useSuccessStory from "../../../../Hooks/useSuccessStory/useSuccessStory";
import { useState } from "react";

const SuccessStory = () => {
    const [story, isLoading] = useSuccessStory();
    const [open, setOpen] = useState(false);
    if (isLoading) {
        return <Spinner className="h-16 w-16 text-gray-900/50 mx-auto my-10" />
    }
    const TABLE_HEAD = ["#", "Male BioData Id", "Female BioData Id", "Action"];
    const handleOpen = () => setOpen(!open);

    return (
        <Card className="min-h-[60vh] w-full p-3 overflow-y-scroll bg-[#ebf6e7]">
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
                    {story.map(({ selfId, partnerId, review }, index) => (
                        <tr key={index} className="even:bg-blue-gray-50/50">
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-medium">
                                    {index + 1}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-medium">
                                    {selfId}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {partnerId}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography as="a" variant="small" color="blue-gray" className="font-medium">
                                    <button onClick={handleOpen} className='bg-[#d453e8] px-3 py-2 rounded-md text-white'>View Story</button>
                                    <Dialog className="w-[40vw] mx-[40vw] my-[30vh]" open={open} handler={handleOpen}>
                                        <DialogHeader>Success Story</DialogHeader>
                                        <DialogBody>{review}</DialogBody>
                                        <DialogFooter>
                                            <Button
                                                variant="text"
                                                color="red"
                                                onClick={handleOpen}
                                                className="ml-auto"
                                            >
                                                <span>Cancel</span>
                                            </Button>
                                        </DialogFooter>
                                    </Dialog>
                                </Typography>
                            </td>
                        </tr>

                    ))}
                </tbody>

            </table>

        </Card>
    );
};

export default SuccessStory;