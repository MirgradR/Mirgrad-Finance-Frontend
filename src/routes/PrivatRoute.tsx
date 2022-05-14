import React from 'react'
import { useSelector } from 'react-redux'
import {
    Navigate,
} from 'react-router-dom'
import { RootState } from '../store/store'

interface Props {
    children: React.ReactNode
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
    const isAuth = useSelector((state: RootState) => state.auth.isAuth)

    if (!isAuth) {
        return <Navigate to="/auth" replace />;
    }

    return (
        <>
            {children}
        </>
    );
};

export default PrivateRoute
