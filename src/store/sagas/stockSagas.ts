import { call, put, takeEvery } from 'redux-saga/effects'
import { StockProfile } from './../../models/Stock'
import { stocksSlice } from './../reducers/stocksReducer'
import { Stock } from '../../models/Stock'
import stocksApi from '../../api/stocksApi'

export type GetStocksAction = {
    type: string,
    payload: {
        name: string,
        limit: number,
        offset: number,
    },
}
export type GetStockProfileAction = {
    type: string,
    payload: string,
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

function* getStockProfile(action: GetStockProfileAction) {
    try {
        //@ts-ignore
        const response: StockProfile = yield call(stocksApi.getStockProfile, action.payload);
        yield put(stocksSlice.actions.getStockProfileSuccess(response))
    } catch (error) {
        yield put(stocksSlice.actions.getStockProfileError((error as Error).message))
    }
}

export function* stockSaga() {
    yield takeEvery(stocksSlice.actions.getStocks, getStocks)
    yield takeEvery(stocksSlice.actions.getStockProfile, getStockProfile)
}
