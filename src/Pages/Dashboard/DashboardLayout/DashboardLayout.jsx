import Navbar from '../../../Shared/Navbar/Navbar';
import Footer from '../../../Shared/Footer/Footer';
import Container from '../../../Layouts/Container/Container';
import UserDashboard from '../UserDashboard/UserDashboard';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Container>
           <div className='min-h-[80vh] grid grid-cols-10'>
            <div className='col-span-2'>
                   <UserDashboard></UserDashboard>
            </div>
            <div className='col-span-8'>
                    <Outlet></Outlet>
            </div>
           </div>
           </Container>
           <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;