import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Stock } from '../../models/Stock'

export interface StocksState {
    stocks: Stock[],
    loading: boolean,
    error: string,
}

const initialState: StocksState = {
    stocks: [],
    loading: false,
    error: '',
}

export const stocksSlice = createSlice({
    name: 'stocks',
    initialState,
    reducers: {
        getStocks(state) {
            state.loading = true
        },
        getStocksSuccess(state, action: PayloadAction<Stock[]>) {
            state.stocks = action.payload
            state.loading = false
        },
        getStocksError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.loading = false
        },
    }
})

export default stocksSlice.reducer
