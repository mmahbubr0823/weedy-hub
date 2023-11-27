import { FaRegEdit } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import { MdFavoriteBorder, MdPermContactCalendar } from "react-icons/md";
import { IoCall } from "react-icons/io5";
const UserDashboardItems = () => {
    return (
        <div>
            <div>
            <div className='bg-white px-4 py-3 rounded-lg min-h-[60vh]'>
            <ul className='space-y-3'>
            <li className='flex items-center gap-2'>
               <ImProfile></ImProfile>
                <NavLink to="/dashboard/createBiodata" className={({ isActive }) => isActive ? 'underline text-green-400' : ''}>
                    Create Biodata
                    </NavLink>
               </li>
            <li className='flex items-center gap-2'>
               <FaRegEdit></FaRegEdit>
                <NavLink to="/" className={({ isActive }) => isActive ? 'underline text-green-400' : ''}>
                    Edit Biodata
                    </NavLink>
               </li>
            <li className='flex items-center gap-2'>
               <MdPermContactCalendar></MdPermContactCalendar>
                <NavLink to="/" className={({ isActive }) => isActive ? 'underline text-green-400' : ''}>
                View Biodata
                    </NavLink>
               </li>
            <li className='flex items-center gap-2'>
               <IoCall></IoCall>
                <NavLink to="/" className={({ isActive }) => isActive ? 'underline text-green-400' : ''}>
                My Contact Request
                    </NavLink>
               </li>
            <li className='flex items-center gap-2'>
               <MdFavoriteBorder></MdFavoriteBorder>
                <NavLink to="/" className={({ isActive }) => isActive ? 'underline text-green-400' : ''}>
                Favourites Biodata
                    </NavLink>
               </li>
            </ul>
            </div>
        </div>
        </div>
    );
};

export default UserDashboardItems;