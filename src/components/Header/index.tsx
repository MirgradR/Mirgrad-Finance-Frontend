import React from 'react'
import { Avatar, Logo } from '../../assets'
import './style.css'

const Header = () => {
    return (
        <header className='header'>
            <Logo />
            <Avatar />
        </header>
    )
}

export default Header
