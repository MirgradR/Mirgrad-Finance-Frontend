import React from 'react'
import { useSelector } from 'react-redux'
import { Avatar, Logo, Logout } from '../../assets'
import { RootState } from '../../store/store'
import './style.css'

const Header: React.FC = () => {
    const isAuth = useSelector((state: RootState) => state.auth.isAuth)

    return (
        <header className='header'>
            <Logo />
            {isAuth
                ? <Logout />
                : <Avatar />
            }
        </header>
    )
}

export default Header
