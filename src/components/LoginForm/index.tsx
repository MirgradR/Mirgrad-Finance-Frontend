import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { AuthForm } from '../../pages/Auth'
import { SubmitButton } from '../../templates'
import { authSlice } from '../../store/reducers/authReducer'
import './style.css'

interface Values {
    password: string;
    email: string;
}

const LoginForm: React.FC<AuthForm> = ({ toggleIsRegistration }) => {
    const dispatch = useDispatch()
    
    const login = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        dispatch(authSlice.actions.loginUser(values))
        setSubmitting(false)
    }

    return (
        <div className='login-form'>
            <h1>Sign in</h1>
            <Formik
                initialValues={{
                    password: '',
                    email: '',
                }}
                onSubmit={login}
            >
                <Form className='login-form__modal'>
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
                    <h3 className='auth-toggle__isRegistration' onClick={() => toggleIsRegistration(true)} >
                        Do you want create an account?
                    </h3>
                    <SubmitButton type='submit' title='Signin' />
                </Form>
            </Formik>
        </div>
    )
}

export default LoginForm
