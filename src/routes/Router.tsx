import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivatRoute'
import PublicRoute from './PublicRoute'
import { Auth, Content, Stocks } from '../pages'
import StockInfo from '../pages/StockInfo'

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={
                <PrivateRoute>
                    <Content />
                </PrivateRoute>
            } />
            <Route path="/stocks" element={
                <PrivateRoute>
                    <Stocks />
                </PrivateRoute>
            } />
            <Route path="/stocks/info/*" element={
                <PrivateRoute>
                    <StockInfo />
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
