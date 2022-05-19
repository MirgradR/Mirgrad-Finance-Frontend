import { AxiosResponse } from 'axios'
import { Stock } from '../models/Stock'
import networkClient from './networkClient'

export interface StockResponse {
    stocks: Stock[]
}

class StocksApi {
    getStocks = async (): Promise<AxiosResponse<StockResponse>> => {
        const response = await networkClient.get('/stocks')
        return response.data
    }
}

export default new StocksApi()
