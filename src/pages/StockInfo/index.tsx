import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { HeaderContent } from '../../components'
import { Stock } from '../../models/Stock'
import StockProfile from '../StockProfile'

const StockInfo = () => {
    const [symbol, setSymbol] = useState('')
    const location = useLocation()

    useEffect(() => {
        setSymbol((location.state as Stock).symbol)
    }, [])

    return (
        <>
            <HeaderContent />
            <Routes>
                <Route path="profile" element={
                    <StockProfile symbol={symbol} />
                } />
                <Route path="news" element={
                    <div>news</div>
                } />
                <Route path="analytics" element={
                    <div>analitics</div>
                } />
            </Routes>  
        </>
    )
}

export default StockInfo
