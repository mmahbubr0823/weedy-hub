import useBioData from '../../../Hooks/useBioData/useBioData';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

import usePremium from '../../../Hooks/usePremium/usePremium';
import { Spinner } from '@material-tailwind/react';
const AdminDashboard = () => {
    const [data] = useBioData();
    const [premiumUser] = usePremium();
    const [male, setMale] = useState([]);
    const [female, setFemale] = useState([]);
    useEffect(() => {
        const filter = data.filter(res => res.BiodataType === 'Male');
        setMale(filter);
        // female data 
        const filter2 = data.filter(res => res.BiodataType === 'Female');
        setFemale(filter2);
    }, [data])
    if (male.length === 0 || data.length === 0 || female.length === 0 || premiumUser.length === 0) {
        return <Spinner className="h-16 w-16 text-gray-900/50 mx-auto my-10" />
    }
    const data01 = [
        { name: 'Total Bio Data', value: data.length },
        { name: ' Male Data', value: male.length },
        { name: ' Female Data', value: female.length },
        { name: ' Premium User', value: premiumUser.length },
    ];
    const colors = ['green', 'brown', 'blue', 'orange'];
    return (
        <div>
            <h1 className='text-3xl text-center font-semibold mb-5'>Bio Data stat at a glance:</h1>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data01}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label={true}
                >
                    {data01.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Legend></Legend>
                <Tooltip />
            </PieChart>

        </div>
    );
};

export default AdminDashboard;