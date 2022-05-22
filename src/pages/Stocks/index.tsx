import React, { useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { SearchStock, StocksListMain } from '../../components'
import { stocksSlice } from '../../store/reducers/stocksReducer'
import { RootState } from '../../store/store'
import './style.css'

const Stocks: React.FC = () => {
    const limit = 20
    const offset = 1
    const count = useSelector((state: RootState) => state.stocks.count)
    const pageCount = Math.ceil(count / limit);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(stocksSlice.actions.getStocks({ limit: limit, offset: offset }))
    },[])

    const handlePageClick = (event: any) => {
        dispatch(stocksSlice.actions.getStocks({ limit: limit, offset: event.selected }))
    }

    return (
        <div className='main-stocks'>
            <SearchStock />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={4}
                pageCount={pageCount}
                previousLabel="< previous"
            />
            <StocksListMain />
        </div>
    )
}

export default Stocks
