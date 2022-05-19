import React from 'react'
import { Stock } from '../../models/Stock'
import './style.css'

interface Props {
    stock: Stock;
}

const StocksListItem: React.FC<Props> = ({stock}) => {

    return (
        <div>{stock.description}</div>
    )
}

export default StocksListItem
