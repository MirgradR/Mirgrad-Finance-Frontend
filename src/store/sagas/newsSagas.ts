import { call, put, takeEvery } from 'redux-saga/effects'
import newsApi from '../../api/newsApi'
import { newsSlice } from '../reducers/newsReducer'

export type GetNewsAction = {
    type: string,
    payload: {
        filters: {
            limit: number,
            offset: number,
        },
        category: string
    },
}

function* getNews(action: GetNewsAction) {
    try {
        //@ts-ignore
        const response = yield call(newsApi.getNews, action.payload.category, action.payload.filters)
        yield put(newsSlice.actions.getNewsSuccess(response))
    } catch (error) {
        yield put(newsSlice.actions.getNewsError((error as Error).message))
    }
}

export function* newsSaga() {
    yield takeEvery(newsSlice.actions.getNews, getNews)
}
