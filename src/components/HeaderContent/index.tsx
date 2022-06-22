import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './style.css'

const HeaderContent: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className='header-content'>
            <p className='header-content__back' onClick={() => navigate('/stocks')}>&#9668; BACK</p>
            <ul className='header-content__list'>
                <li className='header-content__list-item'>
                    <NavLink className={({ isActive }) => (isActive ? "header-content__active" : "header-content__link")} to="profile">Profile</NavLink >
                </li>
                <li className='header-content__list-item'>
                    <NavLink className={({ isActive }) => (isActive ? "header-content__active" : "header-content__link")} to="news">News</NavLink >
                </li>
                <li className='header-content__list-item'>
                    <NavLink className={({ isActive }) => (isActive ? "header-content__active" : "header-content__link")} to="analytics">Analytics</NavLink >
                </li>
            </ul>
        </div>
    )
}

export default HeaderContent
