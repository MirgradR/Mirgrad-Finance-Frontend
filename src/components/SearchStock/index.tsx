import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import useDebounce from '../../hooks/useDebounce'
import { stocksSlice } from '../../store/reducers/stocksReducer'
import { SearchInput } from '../../templates'
import './style.css'

const SearchStock: React.FC = () => {
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch()
    const debouncedSearchTerm = useDebounce(searchValue, 1000)

    useEffect(
        () => {
            dispatch(stocksSlice.actions.getStocks({ name: debouncedSearchTerm }))
        },
        [debouncedSearchTerm]
    )
    return (
        <div className='main-stocks__search'>
            <SearchInput onChange={(e: any) => setSearchValue(e.target.value)} placeholder={'Search stocks'} />
        </div>
    )
}

export default SearchStock
