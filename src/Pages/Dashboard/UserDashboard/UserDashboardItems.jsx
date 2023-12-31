import { FaRegEdit } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import { MdFavoriteBorder, MdPermContactCalendar } from "react-icons/md";
import { GiLovers } from "react-icons/gi";
import { IoCall } from "react-icons/io5";
const UserDashboardItems = () => {
    return (
        <div>
            <div>
            <div className='bg-white px-4 py-3 rounded-lg min-h-[75vh]'>
            <ul className='space-y-3'>
            <li className='flex items-center gap-2'>
               <ImProfile></ImProfile>
                <NavLink to="/dashboard/createBiodata" className={({ isActive }) => isActive ? 'underline text-green-400' : 'hover:text-green-600'}>
                    Create Biodata
                    </NavLink>
               </li>
            <li className='flex items-center gap-2'>
               <FaRegEdit></FaRegEdit>
                <NavLink to="/dashboard/updateBiodata" className={({ isActive }) => isActive ? 'underline text-green-400' : 'hover:text-green-600'}>
                    Edit Biodata
                    </NavLink>
               </li>
            <li className='flex items-center gap-2'>
               <MdPermContactCalendar></MdPermContactCalendar>
                <NavLink to="/dashboard/viewBioData" className={({ isActive }) => isActive ? 'underline text-green-400' : 'hover:text-green-600'}>
                View Biodata
                    </NavLink>
               </li>
            <li className='flex items-center gap-2'>
               <IoCall></IoCall>
                <NavLink to="/dashboard/contactRequests" className={({ isActive }) => isActive ? 'underline text-green-400' : 'hover:text-green-600'}>
                My Contact Request
                    </NavLink>
               </li>
            <li className='flex items-center gap-2'>
               <MdFavoriteBorder></MdFavoriteBorder>
                <NavLink to="/dashboard/favorites" className={({ isActive }) => isActive ? 'underline text-green-400' : 'hover:text-green-600'}>
                Favourites Biodata
                    </NavLink>
               </li>
            <li className='flex items-center gap-2'>
               <GiLovers></GiLovers>
                <NavLink to="/dashboard/gotMarried" className={({ isActive }) => isActive ? 'underline text-green-400' : 'hover:text-green-600'}>
               Got Married
                    </NavLink>
               </li>
            </ul>
            </div>
        </div>
        </div>
    );
};

export default UserDashboardItems;