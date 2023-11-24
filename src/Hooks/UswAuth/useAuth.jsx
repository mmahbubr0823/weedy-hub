import { useContext } from 'react';
import { context } from '../../provider/AuthContext';

const useAuth = () => {
    const auth = useContext(context);
    return auth;
};

export default useAuth;