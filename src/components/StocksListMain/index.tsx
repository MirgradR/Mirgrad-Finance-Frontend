import React from 'react'
import { useSelector } from 'react-redux'
import { Preloader } from '../../templates'
import { RootState } from '../../store/store'
import { StocksListItem } from '..'
import './style.css'

const StocksListMain: React.FC = () => {
    const stocks = useSelector((state: RootState) => state.stocks.stocks)
    const loading = useSelector((state: RootState) => state.stocks.loading)

    if (loading) {
        return <Preloader />
    }

    return (
        <div className='main-stocks__list'>
            {stocks.map(stock => {
                return <StocksListItem stock={stock} key={stock._id} />
            })}
        </div>
    )
}

export default StocksListMain
