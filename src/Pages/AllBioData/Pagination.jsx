import { useEffect, useState } from "react";
import { Button, Spinner } from "@material-tailwind/react";
import useAuth from "../../Hooks/UswAuth/useAuth";
import { axiosPublic } from "../../api";

const Pagination = ({ setFilteredMembers}) => {
    const { loading } = useAuth()
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [count, setCount] = useState(50);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axiosPublic.get(`/members?page=${currentPage}&size=${itemsPerPage}`);

            setFilteredMembers(data);
        };

        fetchData();
    }, [currentPage, itemsPerPage, setFilteredMembers]);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axiosPublic.get('/membersCount');
            setCount(data.count);
        };
        fetchData();
    }, []);

    if (loading) {
        return <Spinner className="h-16 w-16 text-gray-900/50 mx-auto my-10" />
    }

    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];

    const handlePrev = () => {
        setCurrentPage(currentPage - 1);
    }
    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    }
    return (
        <div className=" text-center mt-10">
            <div>
                <Button onClick={handlePrev} disabled={currentPage === 0} className="text-black mr-3 bg-[#f97bd7]">Prev</Button>
                {
                    pages.map(page => <Button
                        key={page}
                        className={currentPage === page ? 'text-black mr-3 bg-[#e5dff0]'
                            : 'text-black mr-3 bg-[#f97bd7]'}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page + 1}
                    </Button>)
                }
                <Button onClick={handleNext} disabled={currentPage === pages.length - 1} className="text-black mr-3 bg-[#f97bd7]">Next</Button>
            </div>
        </div>
    );
};

export default Pagination;