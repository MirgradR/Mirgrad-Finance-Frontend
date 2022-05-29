import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { HeaderContent, ProfileStockCard } from '../../components'
import { Stock } from '../../models/Stock'
import { stocksSlice } from '../../store/reducers/stocksReducer'
import './style.css'

const StockProfile: React.FC = () => {
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(stocksSlice.actions.getStockProfile((location.state as Stock).symbol))
        dispatch(stocksSlice.actions.getStockPrice((location.state as Stock).symbol))
    },[])

    return (
        <div className='main-stocks__stock'>
            <HeaderContent />
            <ProfileStockCard />
        </div>
    )
}

export default StockProfile
