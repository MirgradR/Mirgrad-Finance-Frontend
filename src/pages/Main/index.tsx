import React from 'react'
import { Router } from '../../routes/Router'
import './style.css'

const Main: React.FC = () => {
    return (
        <div className='main'>
            <Router />
            <div>
                Widget
            </div>
        </div>
    )
}

export default Main
