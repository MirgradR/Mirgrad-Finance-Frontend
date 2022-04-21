import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { SubmitButton } from '../../templates'
import './style.css'

interface Values {
    userName: string;
    password: string;
    email: string;
}

const LoginForm = () => {

    return (
        <div className='login-form'>
            <h1>Sign in</h1>
            <Formik
                initialValues={{
                    userName: '',
                    password: '',
                    email: '',
                }}
                onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
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

                    <SubmitButton type='submit' title='Submit' />
                </Form>
            </Formik>
        </div>
    )
}

export default LoginForm
