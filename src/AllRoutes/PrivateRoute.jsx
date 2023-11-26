import { Spinner } from '@material-tailwind/react';
import useAuth from '../Hooks/UswAuth/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    if (loading) {
        return <Spinner className="h-16 w-16 text-gray-900/50 mx-auto my-10" />;    }
    else if (user){
        return children
    }
    else{
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }
    
};

export default PrivateRoute;