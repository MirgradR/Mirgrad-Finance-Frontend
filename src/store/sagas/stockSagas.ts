import { stocksSlice } from './../reducers/stocksReducer'
import { call, put, takeEvery } from 'redux-saga/effects'
import { Stock } from '../../models/Stock'
import stocksApi from '../../api/stocksApi'

export type GetStocksAction = {
    type: string,
    payload: {
        name: string
    },
}
export interface ResponseGetStocks {
    stocks: Stock[],
    count: number
}

function* getStocks(action: GetStocksAction) {
    try {
        //@ts-ignore
        const response: ResponseGetStocks = yield call(stocksApi.getStocks, action.payload);
        yield put(stocksSlice.actions.getStocksSuccess(response))
    } catch (error) {
        yield put(stocksSlice.actions.getStocksError((error as Error).message))
    }
}

export function* stockSaga() {
    yield takeEvery(stocksSlice.actions.getStocks, getStocks)
}
