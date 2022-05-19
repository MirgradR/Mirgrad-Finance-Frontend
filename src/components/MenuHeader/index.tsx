import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const MenuHeder: React.FC = () => {


    return (
        <nav className='header-menu'>
            <ul className='header-menu__list'>
                <li className='header-menu__list-item'><Link to="stocks">Stocks</Link></li>
                <li className='header-menu__list-item'><Link to="news">News</Link></li>
                <li className='header-menu__list-item'><Link to="exchange">Exchange Rate</Link></li>
            </ul>
        </nav>
    )
}

export default MenuHeder
