import { AxiosResponse } from 'axios'
import { createRequestUrl } from '../helpers/createRequestUrl'
import { News } from '../models/News'
import networkClient from './networkClient'

class NewsApi {
    getNews = async (category: string = 'general', filters: { limit: number, offset: number }): Promise<AxiosResponse<News>> => {
        const response = await networkClient.get(`/news/${category}${createRequestUrl(filters)}`)      
        return response.data
    }
}

export default new NewsApi()
