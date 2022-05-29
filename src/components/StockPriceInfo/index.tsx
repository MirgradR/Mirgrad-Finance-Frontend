import React, { useEffect, useState } from 'react'
import { StockPrice, StockProfile } from '../../models/Stock'
import './style.css'

interface Props {
    stockPrice: StockPrice,
    stockProfile: StockProfile
}

const StockPriceInfo: React.FC<Props> = ({ stockPrice, stockProfile }) => {
    const [isRaising, setIsRaising] = useState(false)

    useEffect(() => {
        setIsRaising(stockPrice.d > 0 ? true : false)
    },[])

    const priceFormat = (price: number) => {
        return isRaising ? `+${price.toFixed(2)}` : price.toFixed(2);
    }
    
    return (
        <div className='stock-price__info'>
            <div className='price-info__block'>
                <h3>Price:</h3>
                <div>
                    <p>{stockPrice.c}</p>
                    <p className={isRaising ? 'current-price__raising' : 'current-price__failing'}>
                        {priceFormat(stockPrice.d)} ({priceFormat(stockPrice.dp)}%) {isRaising ? <>&#129045;</> : <>&#129047;</>}
                    </p> 
                </div>
            </div>
            <div className='price-info__block'>
                <h3>Daily range: </h3>
                <p>{stockPrice.l} - {stockPrice.h}</p>
            </div>
            <div className='price-info__block'>
                <h3>Open:</h3>
                <p>{stockPrice.o}</p>
            </div>
            <div className='price-info__block'>
                <h3>Previous close: </h3>
                <p>{stockPrice.pc}</p>
            </div>
            <div className='price-info__block'>
                <h3>Capitalization: </h3>
                <p>{stockProfile.marketCapitalization}</p>
            </div>
        </div>
    )
}

export default StockPriceInfo
