import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Preloader } from '../../templates'
import { StockPriceInfo } from '..'
import './style.css'

const ProfileStockCard: React.FC = () => {
    const stockProfile = useSelector((state: RootState) => state.stocks.stockProfile)
    const stockPrice = useSelector((state: RootState) => state.stocks.stockPrice)
    const loading = useSelector((state: RootState) => state.stocks.loading)

    if (loading) {
        return <Preloader />
    }

    return (
        <div className='stock-profile__card'>
            <img className='stock-profile__card-logo' src={stockProfile.logo} alt={stockProfile.ticker} />
            <div className='stock-profile__card-info'>
                <h3 className='stock-profile__card-info__title'>{stockProfile.name}</h3>
                <p>Country: {stockProfile.country}</p>
                <p>Industry: {stockProfile.finnhubIndustry}</p>
                {stockProfile.owner && <p>Owner: {stockProfile.owner}</p>}
                <p>Ticker: {stockProfile.ticker}</p>
                <p>IPO: {new Date(stockProfile.ipo).getFullYear()}</p>
                <p>Phone: {stockProfile.phone}</p>
                <p>WebUrl: {stockProfile.weburl}</p>
                <StockPriceInfo stockPrice={stockPrice} stockProfile={stockProfile} />
            </div>
        </div>

    )
}

export default ProfileStockCard
