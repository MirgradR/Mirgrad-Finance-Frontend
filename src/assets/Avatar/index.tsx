import React from 'react'
import { authImages } from '..'
import './style.css'

const Avatar = () => {
    return (
        <div className='avatar'>
            <img width='30px' src={authImages.userDefaultImg} alt='userAvatar' />
        </div>
    )
}

export default Avatar
