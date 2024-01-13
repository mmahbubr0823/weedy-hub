import useBioData from '../../../Hooks/useBioData/useBioData';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';

import usePremium from '../../../Hooks/usePremium/usePremium';
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
    const data01 = [
        { name: 'Total Bio Data', value: data.length },
        { name: ' Male Data', value: male.length },
        { name: ' Female Data', value: female.length },
        { name: ' Premium User', value: premiumUser.length },
    ];
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
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