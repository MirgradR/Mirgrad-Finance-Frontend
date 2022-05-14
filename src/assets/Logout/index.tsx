import React from 'react'
import { useDispatch } from 'react-redux'
import { authSlice } from '../../store/reducers/authReducer'
import './style.css'

const Logout: React.FC = () => {
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(authSlice.actions.logoutUser())
    }

    return (
        <div onClick={logout} className='logout-logo'>
            &#10006;
        </div>
    )
}

export default Logout
