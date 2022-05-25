import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Paginator, SearchStock, StocksListMain, WidgetNews } from '../../components'
import { PAGINATION_CONSTANT } from '../../constants/constants'
import { stocksSlice } from '../../store/reducers/stocksReducer'
import { RootState } from '../../store/store'
import './style.css'

const Stocks: React.FC = () => {
    const limit = PAGINATION_CONSTANT.LIMIT
    const offset = PAGINATION_CONSTANT.OFFSET
    const count = useSelector((state: RootState) => state.stocks.count)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(stocksSlice.actions.getStocks({ limit: limit, offset: offset }))
    },[])

    const handlePageClick = (event: any) => {
        dispatch(stocksSlice.actions.getStocks({ limit: limit, offset: event.selected * limit }))
    }

    return (
        <div className='main-stocks'>
            <div className='stocks-content'>
                <SearchStock />
                <Paginator handlePageClick={handlePageClick} count={count} limit={limit} />
                <StocksListMain />
            </div>
            <WidgetNews />
        </div>
    )
}

export default Stocks
