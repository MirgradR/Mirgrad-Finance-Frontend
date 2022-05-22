import { AxiosResponse } from 'axios'
import { Stock } from '../models/Stock'
import networkClient from './networkClient'

export interface StockResponse {
    stocks: Stock[]
}

const createRequestUrl = (filters: any) => {
    let url = '?'
    for (let key in filters) {
        url += key + '=' + filters[key] + '&'
    }
    return url.slice(0, -1)
}

class StocksApi {
    getStocks = async (filters: any): Promise<AxiosResponse<StockResponse>> => {
        const response = await networkClient.get(`/stocks${createRequestUrl(filters)}`)      
        return response.data
    }
}

export default new StocksApi()
