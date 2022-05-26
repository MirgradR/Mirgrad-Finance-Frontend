import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Stock } from '../../models/Stock'
import { stocksSlice } from '../../store/reducers/stocksReducer'
import { RootState } from '../../store/store'
import './style.css'

const StockProfile: React.FC = () => {
    const stockProfile = useSelector((state: RootState) => state.stocks.stockProfile)
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(stocksSlice.actions.getStockProfile((location.state as Stock).symbol))
    },[])
    
    return (
        <div className='main-stocks__stock'>
            <h3>{stockProfile.name}</h3>
            <p>Country: {stockProfile.country}</p>
            <p>Industry: {stockProfile.finnhubIndustry}</p>
            {stockProfile.owner && <p>Owner: {stockProfile.owner}</p>}
            <p>Phone: {stockProfile.phone}</p>
            <p>WebUrl: {stockProfile.weburl}</p>
            
        </div>
    )
}

export default StockProfile
