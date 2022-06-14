import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Paginator, SearchStock, StocksListMain, WidgetNews } from '../../components'
import { PAGINATION_CONSTANT } from '../../constants/constants'
import { stocksSlice } from '../../store/reducers/stocksReducer'
import { RootState } from '../../store/store'
import './style.css'

const limit = PAGINATION_CONSTANT.LIMIT

const Stocks: React.FC = () => {
    const [offset, setOffset] = useState(PAGINATION_CONSTANT.OFFSET)
    const [value, setValue] = useState('')
    const count = useSelector((state: RootState) => state.stocks.count) 
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(stocksSlice.actions.getStocks({ name: value, limit: limit, offset: offset }))
    }, [offset, value])

    const handlePageClick = (event: any) => {
        if (value) {
            setOffset(event.selected + 1)
        } else {
            setOffset(event.selected * limit)
        }   
    }

    return (
        <div className='main-stocks'>
            <div className='stocks-content'>
                <SearchStock setValue={setValue} setOffset={setOffset} />
                <Paginator handlePageClick={handlePageClick} count={count} limit={limit} />
                <StocksListMain />
            </div>
            <WidgetNews />
        </div>
    )
}

export default Stocks
