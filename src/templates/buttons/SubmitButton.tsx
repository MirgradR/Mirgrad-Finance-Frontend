import React from 'react'
import './style.css'

interface Props {
    title: string,
    type: 'button' | 'submit' | 'reset' | undefined
}

const SubmitButton: React.FC<Props> = ({ title, ...rest }) => {
    return (
        <button className='submit-button' { ...rest }>{title}</button>
    )
}

export default SubmitButton
