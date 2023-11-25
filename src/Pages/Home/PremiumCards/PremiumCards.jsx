import React from 'react';
import useAxios from '../../../Hooks/useAxios/useAxios';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useState } from 'react';
import PremiumCard from './PremiumCard';

const PremiumCards = () => {
    const axios = useAxios();
    const [loadedData, setLoadedData] = useState([])
    const {data =[]}= useQuery({
        queryKey: ['members'],
        queryFn: async ()=>{
            const res = await axios.get('/members');
            return res.data;
        }
    })
    useEffect(()=>{
        const sortedItems = data?.sort((a, b) =>b.Age - a.Age);
        setLoadedData(sortedItems)
    }, [data])

    return (
       <div>
        <div className='text-center'>
            <h1 className='text-3xl font-bold mb-3'>Find Your B<span className='text-[#ed43f6]'>e</span>lov<span className='text-[#ed43f6]'>e</span>d!</h1>
            <p className='text-sm text-gray-500'>Find Your Beloved encapsulates the essence of discovering <br /> a cherished life partner. The phrase evokes a sense of deep connection and emphasizes <br /> the journey to finding someone truly special and cherished.</p>
        </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
            {
                loadedData.map(member =><PremiumCard
                key={member.BiodataId}
                member={member}
                >
                </PremiumCard>)
            }
        </div>
       </div>
    );
};

export default PremiumCards;