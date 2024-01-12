import Navbar from '../../../Shared/Navbar/Navbar';
import Footer from '../../../Shared/Footer/Footer';
import Container from '../../../Layouts/Container/Container';
import UserDashboard from '../UserDashboard/UserDashboard';
import { Outlet } from 'react-router-dom';
import AdminDashboardItems from '../AdminDashboard/AdminDashboardItems';
import useAuth from '../../../Hooks/UswAuth/useAuth';
import useRole from '../../../Hooks/useRole/useRole';
const DashboardLayout = () => {
    const {user} = useAuth();
    const [userRole] = useRole(user.email);
    console.log(userRole.role);
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