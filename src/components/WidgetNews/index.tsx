import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { newsCategories, paginationNews } from '../../constants/constants'
import { newsSlice } from '../../store/reducers/newsReducer'
import { RootState } from '../../store/store'
import { NewsList } from '..'
import './style.css'

const WidgetNews: React.FC = () => {
    const [currentCategory, setCurrentCategory] = useState(newsCategories[0])
    const [page, setPage] = useState(paginationNews.offset)
    const news = useSelector((state: RootState) => state.news.news)
    const dispatch = useDispatch()

    const getNews = (limit: number, offset: number, category: string = currentCategory) => {
        dispatch(newsSlice.actions.getNews({ category: category, filters: { limit, offset } }))
    }

    useEffect(() => {
        getNews(paginationNews.limit, page, currentCategory)
    }, [currentCategory])

    return (
        <div className='widget-news'>
            <div className='widget-news__categories'>
                {newsCategories.map(category => {
                    return (
                        <button
                        key={category}
                        onClick={(e) => setCurrentCategory(category)}
                        className={currentCategory === category ? 'change-news__category_active' : 'change-news__category'}
                        >
                            {category}
                        </button>
                    )
                })}
            </div>
            {news.length > 0 
                ? <NewsList page={page} setPage={setPage} getNews={getNews} news={news} />
                : <div className='widget-news__empty-list'>There is no news</div>
            }       
        </div>
    )
}

export default WidgetNews
