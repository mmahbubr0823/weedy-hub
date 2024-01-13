import Navbar from '../../../Shared/Navbar/Navbar';
import Footer from '../../../Shared/Footer/Footer';
import Container from '../../../Layouts/Container/Container';
import UserDashboard from '../UserDashboard/UserDashboard';
import { Outlet } from 'react-router-dom';
import AdminDashboardItems from '../AdminDashboard/AdminDashboardItems';
import useAuth from '../../../Hooks/UswAuth/useAuth';
import useRole from '../../../Hooks/useRole/useRole';
import { Spinner } from '@material-tailwind/react';
const DashboardLayout = () => {
    const {user, loading} = useAuth();
    const [userRole, isLoading] = useRole(user.email);
    if (isLoading || loading) {
        return <Spinner className="h-16 w-16 text-gray-900/50 mx-auto my-10" />
    }
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <div className=' grid grid-cols-10 gap-3 mt-16'>
                    <div className='col-span-2'>
                        {
                            (userRole.role === 'randomUser' || userRole.role === 'premium') && <UserDashboard></UserDashboard>
                        }
                        {
                        userRole.role === 'admin' &&  <AdminDashboardItems></AdminDashboardItems>
                        }
                    </div>
                    <div className='col-span-8 mx-auto'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;