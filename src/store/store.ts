import createSagaMiddleware from '@redux-saga/core'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authSaga } from './sagas/authSagas'
import authReducer from './reducers/authReducer'
import stocksReducer from './reducers/stocksReducer'
import { stockSaga } from './sagas/stockSagas'
import { newsSaga } from './sagas/newsSagas'
import newsReducer from './reducers/newsReducer'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    auth: authReducer,
    stocks: stocksReducer,
    news: newsReducer
})

const setupStore = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: false,
            immutableCheck: false,
            serializableCheck: false
        }).concat(sagaMiddleware),
})

sagaMiddleware.run(authSaga);
sagaMiddleware.run(stockSaga);
sagaMiddleware.run(newsSaga);

export type RootState = ReturnType<typeof setupStore.getState>

export default setupStore
