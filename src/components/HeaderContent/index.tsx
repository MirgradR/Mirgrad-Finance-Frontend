import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const HeaderContent: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className='header-content'>
            <div className='header-content__back' onClick={() => navigate(-1)}>&#9668; BACK</div>
            <div className='header-content__menu'>
                <p>Profile</p>
                <p>News</p>
                <p>Analytics</p>
            </div>
        </div>
    )
}

export default HeaderContent
