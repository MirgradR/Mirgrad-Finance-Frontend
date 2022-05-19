import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { StocksListMain } from '../../components'
import { stocksSlice } from '../../store/reducers/stocksReducer'
import './style.css'

const Stocks: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(stocksSlice.actions.getStocks())
    },[])

    return (
        <div className='main-stocks'>
            <StocksListMain />
        </div>
    )
}

export default Stocks
