import React, { Dispatch, SetStateAction } from 'react'
import { paginationNews } from '../../constants/constants'
import { News } from '../../models/News'
import NewsListItem from '../NewsListItem'
import './style.css'

interface Props {
    news: News[],
    getNews: (limit: number, offset: number, category?: string) => void,
    page: number,
    setPage: Dispatch<SetStateAction<number>>
}

const NewsList: React.FC<Props> = ({ news, getNews, setPage, page }) => {
    const changePage = () => {
        setPage(prev => {
            return prev += 1
        })
        getNews(paginationNews.limit, page)
    }

    return (
        <div className='news-list'>
            {news.map(element => {
                return <NewsListItem key={element.id} news={element} />
            })}
            <button onClick={changePage} className='news-list__fetch-more'>More</button>
        </div>
    )
}

export default NewsList
