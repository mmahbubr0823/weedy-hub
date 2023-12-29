import { FaRegEdit } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { IoCall } from 'react-icons/io5';
import { MdPermContactCalendar } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const AdminDashboardItems = () => {
    return (
        <div>
            <div>
            <div className='bg-white px-4 py-3 min-h-screen rounded-lg'>
            <ul className='space-y-3'>
            <li className='flex items-center gap-2'>
               <ImProfile></ImProfile>
                <NavLink to="/dashboard/adminDashboard" className={({ isActive }) => isActive ? 'underline text-green-400' : ''}>
                Admin Dashboard
                    </NavLink>
               </li>
            <li className='flex items-center gap-2'>
               <FaRegEdit></FaRegEdit>
                <NavLink to="/dashboard/manageUsers" className={({ isActive }) => isActive ? 'underline text-green-400' : ''}>
                Manage Users
                    </NavLink>
               </li>
            <li className='flex items-center gap-2'>
               <MdPermContactCalendar></MdPermContactCalendar>
                <NavLink to="/dashboard/approvedPremium" className={({ isActive }) => isActive ? 'underline text-green-400' : ''}>
                Approved Premium
                    </NavLink>
               </li>
            <li className='flex items-center gap-2 text-sm'>
               <IoCall></IoCall>
                <NavLink to="/dashboard/approvedContactRequest" className={({ isActive }) => isActive ? 'underline text-green-400' : ''}>
                Approved Contact Request
                    </NavLink>
               </li>
            </ul>
            </div>
        </div>
        </div>
    );
};

export default AdminDashboardItems;