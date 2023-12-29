import { useQuery } from '@tanstack/react-query';
import useBioData from '../../../Hooks/useBioData/useBioData';
import { axiosPublic } from '../../../api';
const AdminDashboard = () => {
    const [data] = useBioData();
    const {data: male = []}= useQuery({
        queryKey: ['male'],
        queryFn: async ()=>{
            const res = await axiosPublic.get('/members/Male');
            return res.data;
        }
    })
    const {data: female = []}= useQuery({
        queryKey: ['female'],
        queryFn: async ()=>{
            const res = await axiosPublic.get('/members/Female');
            return res.data;
        }
    })
    return (
        <div>
            <h1 className='text-3xl text-center font-semibold mb-5'>Bio Data stat at a glance:</h1>
            <div className='grid grid-cols-2 gap-4 px-5'>
                <div className='bg-[#eaf46b] w-96 p-12 rounded-lg'>
                    <h1 className='text-2xl'>Total Bio Data: { data.length}</h1>
                </div>
                <div className='bg-[#f46b70] w-96 p-12 rounded-lg'>
                    <h1 className='text-2xl'>Total Male Data: { male.length}</h1>
                </div>
                <div className='bg-[#f078d2] w-96 p-12 rounded-lg'>
                    <h1 className='text-2xl'>Total Female Data: { female.length}</h1>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;