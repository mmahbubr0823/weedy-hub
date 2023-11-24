import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

const MyCreatedRoutes = createBrowserRouter([
    {
        path:'/',
        element: <MainLayouts></MainLayouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signUp',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
        ]
    }
])

export default MyCreatedRoutes;