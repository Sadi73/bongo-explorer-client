import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { RiseLoader } from 'react-spinners';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if(loading){
        return <RiseLoader color="#36d7b7" />
    }

    if (user) {
        return children;
    };

    return <Navigate state={location?.pathname} to='/login'/>

};

export default PrivateRoute;