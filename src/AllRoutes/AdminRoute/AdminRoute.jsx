import { Spinner } from "@material-tailwind/react";
import useRole from "../../Hooks/useRole/useRole";
import { Navigate } from "react-router-dom";
import useAuth from "../../Hooks/UswAuth/useAuth";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [userRole, isLoading]= useRole(user.email)
    if (isLoading || loading) {
        return <Spinner className="h-16 w-16 text-gray-900/50 mx-auto my-10" />
    }
    if (userRole.role === 'admin') {
        return children;
    }
    return <Navigate to='/dashboard'></Navigate>
};

export default AdminRoute;