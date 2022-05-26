import React from 'react'
import { Stock } from '../../models/Stock'
import './style.css'

interface Props {
    stock: Stock;
}

const StocksListItem: React.FC<Props> = ({stock}) => {

    return (
        <div className='main-stocks__list-item'>
            <h3 className='list-item__title'>{stock.description}</h3>
            <div className='list-item__block-type'>
                <p>{stock.displaySymbol || stock.symbol}</p>
                <p>{stock.type || 'New tool'}</p>
            </div>
            
        </div>
    )
}

export default StocksListItem
