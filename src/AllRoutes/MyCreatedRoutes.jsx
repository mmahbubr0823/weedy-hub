import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";

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
        ]
    }
])

export default MyCreatedRoutes;