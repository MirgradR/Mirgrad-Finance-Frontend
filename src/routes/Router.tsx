import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivatRoute'
import { Auth, Content } from '../pages'
import PublicRoute from './PublicRoute'

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={
                <PrivateRoute>
                    <Content />
                </PrivateRoute>
            } />
            <Route path="/auth" element={
                <PublicRoute>
                    <Auth />
                </PublicRoute>
            } />
            <Route path="*" element={<div>Page not found</div>} />
        </Routes>
    )
}
