import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import MemberDetails from "../Pages/MemberDetails/MemberDetails";
import PrivateRoute from "./PrivateRoute";
import Page404 from "../Pages/Page404/Page404";
import AllBioData from "../Pages/AllBioData/AllBioData";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout/DashboardLayout";
import CreateBiodata from "../Pages/Dashboard/UserDashboard/DashboardPages/CreateBiodata/CreateBiodata";
import ViewBioData from "../Pages/Dashboard/UserDashboard/DashboardPages/ViewBioData/ViewBioData";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Checkout from "../Pages/Checkout/Checkout";
import ContactRequest from "../Pages/Dashboard/UserDashboard/ContactRequest/ContactRequest";
import FavoriteBiodata from "../Pages/Dashboard/UserDashboard/DashboardPages/FavoriteBiodata/FavoriteBiodata";
import EditBiodata from "../Pages/Dashboard/UserDashboard/DashboardPages/EditBiodata/EditBiodata";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers";
import ApprovedPremium from "../Pages/Dashboard/AdminDashboard/ApprovedPremium";
import ApprovedContactRequest from "../Pages/Dashboard/AdminDashboard/ApprovedContactRequest";
import GotMarried from "../Pages/Dashboard/UserDashboard/GotMarried/GotMarried";
const MyCreatedRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signUp',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/allBioData',
                element: <AllBioData></AllBioData>
            },
            {
                path: '/members/:id',
                element: <PrivateRoute>
                    <MemberDetails></MemberDetails>
                </PrivateRoute>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute>
                   <Checkout></Checkout>
                </PrivateRoute>
            },
        ]
    },
    // dashboard part 
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
            // user dashboard 
            {
                path: '/dashboard/createBiodata',
                element: <CreateBiodata></CreateBiodata>
            },
            {
                path: '/dashboard/viewBioData',
                element: <ViewBioData></ViewBioData>
            },
            {
                path: '/dashboard/updateBiodata',
                element: <EditBiodata></EditBiodata>
            },
            {
                path: '/dashboard/contactRequests',
                element: <ContactRequest></ContactRequest>
            },
            {
                path: '/dashboard/favorites',
                element: <FavoriteBiodata></FavoriteBiodata>
            },
            {
                path: '/dashboard/gotMarried',
                element: <GotMarried></GotMarried>
            },
            // admin dashboard 
            {
                path: '/dashboard/adminDashboard',
                element: <AdminDashboard></AdminDashboard>
            },
            {
                path: '/dashboard/manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: '/dashboard/approvedPremium',
                element: <ApprovedPremium></ApprovedPremium>
            },
            {
                path: '/dashboard/approvedContactRequest',
                element: <ApprovedContactRequest></ApprovedContactRequest>
            },
            
            
        ]
    },
    {
        path: '*',
        element: <Page404></Page404>
    }
])

export default MyCreatedRoutes;