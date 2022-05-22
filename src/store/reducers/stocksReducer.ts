import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Stock } from '../../models/Stock'
import { ResponseGetStocks } from '../sagas/stockSagas'

export interface StocksState {
    stocks: Stock[],
    count: number,
    loading: boolean,
    error: string,
}

const initialState: StocksState = {
    stocks: [],
    loading: false,
    error: '',
    count: 0
}

export const stocksSlice = createSlice({
    name: 'stocks',
    initialState,
    reducers: {
        getStocks(state, action) {
            state.loading = true
        },
        getStocksSuccess(state, action: PayloadAction<ResponseGetStocks>) {
            state.stocks = action.payload.stocks
            state.count = action.payload.count
            state.loading = false
        },
        getStocksError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.loading = false
        },
    }
})

export default stocksSlice.reducer
