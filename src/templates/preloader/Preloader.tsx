import React from 'react'
import './style.css'

const Preloader: React.FC = () => {
    return (
        <div className='preloader'><div className='lds-roller'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>
    )
}

export default Preloader
