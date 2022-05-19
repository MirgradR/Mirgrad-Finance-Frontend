import React from 'react'
import { useSelector } from 'react-redux'
import { MenuHeader } from '..'
import { RootState } from '../../store/store'
import { Avatar, Logo, Logout } from '../../assets'

import './style.css'

const Header: React.FC = () => {
    const isAuth = useSelector((state: RootState) => state.auth.isAuth)

    return (
        <header className='header'>
            <Logo />
            <MenuHeader />
            {isAuth
                ? <Logout />
                : <Avatar />
            }
        </header>
    )
}

export default Header
