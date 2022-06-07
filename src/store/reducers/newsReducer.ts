import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { News } from '../../models/News'

export interface NewsState {
    news: News[],
    count: number,
    loading: boolean,
    error: string,
}

const initialState: NewsState = {
    news: [],
    loading: false,
    error: '',
    count: 0
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        getNews(state, action) {
            state.loading = true
        },
        getNewsSuccess(state, action: PayloadAction<News[]>) {
            state.news = action.payload
            state.loading = false
        },
        getNewsError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.loading = false
        },
    }
})

export default newsSlice.reducer
