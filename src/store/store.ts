import createSagaMiddleware from '@redux-saga/core'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authSaga } from './sagas/authSagas'
import authReducer from './reducers/authReducer'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    auth: authReducer
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

export type RootState = ReturnType<typeof setupStore.getState>

export default setupStore
