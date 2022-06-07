import { AxiosResponse } from 'axios'
import { createRequestUrl } from '../helpers/createRequestUrl'
import { Stock, StockPrice } from '../models/Stock'
import { StockProfile } from './../models/Stock'
import networkClient from './networkClient'

export interface StockResponse {
    stocks: Stock[]
}

class StocksApi {
    getStocks = async (filters: any): Promise<AxiosResponse<StockResponse>> => {
        const response = await networkClient.get(`/stocks${createRequestUrl(filters)}`)      
        return response.data
    }
    getStockProfile = async (symbol: string): Promise<AxiosResponse<StockProfile>> => {
        const response = await networkClient.get(`/stocks/${symbol}/profile`)      
        return response.data
    }
    getStockPrice = async (symbol: string): Promise<AxiosResponse<StockPrice>> => {
        const response = await networkClient.get(`/stocks/${symbol}/price`)      
        return response.data
    }
}

export default new StocksApi()
