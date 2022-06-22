import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ProfileStockCard } from '../../components'
import { stocksSlice } from '../../store/reducers/stocksReducer'
import './style.css'

interface Props {
    symbol: string
}

const StockProfile: React.FC<Props> = ({ symbol }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(stocksSlice.actions.getStockProfile(symbol))
        dispatch(stocksSlice.actions.getStockPrice(symbol))
    },[])

    return (
        <div className='main-stocks__stock'>
            <ProfileStockCard />
        </div>
    )
}

export default StockProfile
