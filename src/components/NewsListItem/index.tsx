import React from 'react'
import { News } from '../../models/News'
import './style.css'

interface Props {
    news: News
}

const NewsListItem: React.FC<Props> = ({ news }) => {
    return (
        <div className='news-list__item'>
            <h3>{news.headline}</h3>
            <img src={news.image} alt={news.source} />
            <p>{news.summary}</p>
            <div className='news-list__item-sourse'>
                <p>{news.source}</p>
                <a href={news.url}>Read more</a>  
            </div>
        </div>
    )
}

export default NewsListItem
