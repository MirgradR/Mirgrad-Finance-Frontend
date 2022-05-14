import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { AuthForm } from '../../pages/Auth'
import { SubmitButton } from '../../templates'
import { authSlice } from '../../store/reducers/authReducer'
import './style.css'

interface Values {
    userName: string;
    password: string;
    email: string;
}

const RegistrationForm: React.FC<AuthForm> = ({ toggleIsRegistration }) => {
    const dispatch = useDispatch()
    
    const registration = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        dispatch(authSlice.actions.registrationUser(values))
        setSubmitting(false)
    }

    return (
        <div className='login-form'>
            <h1>Create account</h1>
            <Formik
                initialValues={{
                    userName: '',
                    password: '',
                    email: '',
                }}
                onSubmit={registration}
            >
                <Form className='login-form__modal'>
                    <label htmlFor='userName'>User Name</label>
                    <Field
                        className='input-field'
                        id='userName'
                        name='userName'
                        placeholder='John'
                    />

                    <label htmlFor='email'>Email</label>
                    <Field
                        className='input-field'
                        id='email'
                        name='email'
                        placeholder='john@acme.com'
                        type='email'
                    />

                    <label htmlFor='password'>Password</label>
                    <Field
                        className='input-field'
                        id='password'
                        type='password'
                        name='password'
                        placeholder='password'
                    />
                    <h3 className='auth-toggle__isRegistration' onClick={() => toggleIsRegistration(false)}>
                        Do you have an account?
                    </h3>
                    <SubmitButton type='submit' title='Create' />
                </Form>
            </Formik>
        </div>
    )
}

export default RegistrationForm
