import React from 'react'
import { useNavigate } from 'react-router-dom'
import { authImages } from '..'
import './style.css'

const Avatar: React.FC = () => {
    const navigate = useNavigate()

    const profile = () => {
        navigate('/auth')
    }

    return (
        <div onClick={profile} className='avatar'>
            <img width='30px' src={authImages.userDefaultImg} alt='userAvatar' />
        </div>
    )
}

export default Avatar
