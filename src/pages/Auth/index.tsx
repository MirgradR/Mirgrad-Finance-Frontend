import React, { useState } from 'react'
import { LoginForm, RegistrationForm } from '../../components'
import './style.css'

export interface AuthForm {
    toggleIsRegistration: (arg: boolean) => void
}

const Auth: React.FC = () => {
    const [isRegistration, setIsRegistration] = useState(false)

    const toggleIsRegistration = (arg: boolean) => {
        setIsRegistration(arg)
    }

    return (
        <div className='auth'>
            {isRegistration
                ? <RegistrationForm toggleIsRegistration={toggleIsRegistration} />
                : <LoginForm toggleIsRegistration={toggleIsRegistration} />
            }
        </div>
    )
}

export default Auth
