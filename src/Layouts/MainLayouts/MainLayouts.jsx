import { Outlet } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from '../../Shared/Footer/Footer';

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster></Toaster>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;