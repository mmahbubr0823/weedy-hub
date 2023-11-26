import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import MemberDetails from "../Pages/MemberDetails/MemberDetails";
import PrivateRoute from "./PrivateRoute";
import Page404 from "../Pages/Page404/Page404";

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
                path: '/members/:id',
                element: <PrivateRoute>
                    <MemberDetails></MemberDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/members/${params.id}`)
            },
        ]
    },
    {
        path:'*',
        element: <Page404></Page404>
    }
])

export default MyCreatedRoutes;