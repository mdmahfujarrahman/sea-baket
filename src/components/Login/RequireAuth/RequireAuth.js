import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase/firebase.init';
import Loading from '../../Sheard/Loading';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const Navigate = useNavigate()
    const location = useLocation()

    if(loading){
        return <Loading/>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children
};

export default RequireAuth;