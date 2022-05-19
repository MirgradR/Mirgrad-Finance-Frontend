import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { StocksListItem } from '..'
import './style.css'

const StocksListMain: React.FC = () => {
    const stocks = useSelector((state: RootState) => state.stocks.stocks)

    return (
        <div className='main-stocks__list'>
            {stocks.map(stock => {
                return <StocksListItem stock={stock} />
            })}
        </div>
    )
}

export default StocksListMain
