import Container from '../../Layouts/Container/Container';
import { CgProfile } from "react-icons/cg";
import { BiMale } from "react-icons/bi";
import { FaFemale } from "react-icons/fa";
import { GiLovers } from "react-icons/gi";
import { useEffect, useState } from 'react';
const SuccessCounter = ({data}) => {
    const members = data;
    const [male, setMale]= useState([]);
    const [feMale, setFemale]= useState([]);
    useEffect(()=>{
        const filteredMale = members?.filter((member) =>member.BiodataType === 'Male');
        setMale(filteredMale)

        const filteredFemale = members?.filter((member) =>member.BiodataType === 'Female');
        setFemale(filteredFemale)
    }, [members]);
    useEffect(()=>{
        const filteredFemale = members?.filter((member) =>member.BiodataType === 'Female');
        setFemale(filteredFemale)
    }, [members]);
    return (
        <div>
            <Container>
                <div className="my-10">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">Success Counter</h1>
                        <p className="text-sm my-3">Users can make the most of the matrimony website by first registering and creating a comprehensive profile that highlights their personal details, education, profession, family background, and partner preferences. </p>
                    </div>
                    <div className="bg-lime-100 border-x-4 grid md:grid-cols-2">
                        <div className="border-b-4 flex gap-4 items-center px-20 py-16">
                            <p className="text-2xl">Total Biodata:{members?.length}</p>
                            <p><span><CgProfile className="text-4xl" /></span></p>
                        </div>
                        <div className=" border-l-4 flex gap-4 items-center px-20  py-16">
                            <p className="text-2xl">Total Male Partner:{male.length}</p>
                            <p><span><BiMale className="text-4xl" /></span></p>
                        </div>
                        <div className="border-r-4 flex gap-4 items-center px-20 py-16">
                            <p className="text-2xl">Total Female Partner:{feMale.length}</p>
                            <p><span><FaFemale className="text-4xl" /></span></p>
                        </div>
                        <div className="border-t-4 flex gap-4 items-center px-20 py-16">
                            <p className="text-2xl">Total Marriage:{Math.round(members.length*.6)}</p>
                            <p><span><GiLovers className="text-4xl" /></span></p>
                        </div>
                        
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SuccessCounter;