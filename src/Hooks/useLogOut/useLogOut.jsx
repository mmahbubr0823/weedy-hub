import React from 'react';
import useAuth from '../UswAuth/useAuth';
import toast from 'react-hot-toast';

const useLogOut = () => {
    const {logOut}= useAuth();
    logOut()
            .then(result => {
                toast.success('User successfully signed out')

            })
            .catch(err => {
                toast.error('Something went wrong')
            })
};

export default useLogOut;