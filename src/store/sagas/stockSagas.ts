import { stocksSlice } from './../reducers/stocksReducer'
import { call, put, takeEvery } from 'redux-saga/effects'
import { Stock } from '../../models/Stock'
import stocksApi from '../../api/stocksApi'

export type CreateUserAction = {
    type: string,
    payload: {
        stocks: Stock[]
    },
}

function* getStocks() {
    try {
        //@ts-ignore
        const response: Stock[] = yield call(stocksApi.getStocks);
        yield put(stocksSlice.actions.getStocksSuccess(response))
    } catch (error) {
        yield put(stocksSlice.actions.getStocksError((error as Error).message))
    }
}

export function* stockSaga() {
    yield takeEvery(stocksSlice.actions.getStocks, getStocks)
}
