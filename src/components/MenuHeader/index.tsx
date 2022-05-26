import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const MenuHeder: React.FC = () => {


    return (
        <nav className='header-menu'>
            <ul className='header-menu__list'>
                <li className='header-menu__list-item'>
                    <NavLink className={({ isActive }) => (isActive ? "header-menu__active" : "header-menu__link")} to="stocks">Stocks</NavLink >
                </li>
                <li className='header-menu__list-item'>
                    <NavLink className={({ isActive }) => (isActive ? "header-menu__active" : "header-menu__link")} to="news">News</NavLink >
                </li>
                <li className='header-menu__list-item'>
                    <NavLink className={({ isActive }) => (isActive ? "header-menu__active" : "header-menu__link")} to="exchange">Exchange Rate</NavLink >
                </li>
            </ul>
        </nav>
    )
}

export default MenuHeder
