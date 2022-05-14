import { AuthResponse } from './../../api/authApi'
import { call, put, takeEvery } from 'redux-saga/effects'
import { authSlice } from './../reducers/authReducer'
import authApi from '../../api/authApi'

export type CreateUserAction = {
    type: string,
    payload: {
        email: string,
        password: string,
        userName?: string
    },
}

function* registration(action: CreateUserAction) {
    try {
        //@ts-ignore
        const response: AuthResponse = yield call(authApi.registration, action.payload.email, action.payload.userName, action.payload.password);
        localStorage.setItem('token', response.accessToken)
        yield put(authSlice.actions.registrationUserSuccess(response.user))
    } catch (error) {
        yield put(authSlice.actions.refreshUserError((error as Error).message))
    }
}
function* login(action: CreateUserAction) {
    try {
        //@ts-ignore
        const response: AuthResponse = yield call(authApi.login, action.payload.email, action.payload.password);
        localStorage.setItem('token', response.accessToken)
        yield put(authSlice.actions.loginUserSuccess(response.user))
    } catch (error) {
        yield put(authSlice.actions.loginUserError((error as Error).message))
    }
}
function* logout() {
    try {
        //@ts-ignore
        yield call(authApi.logout);
        localStorage.removeItem('token')
        yield put(authSlice.actions.logoutUserSuccess)
    } catch (error) {
        yield put(authSlice.actions.logoutUserError((error as Error).message))
    }
}
function* refresh() {
    try {
        //@ts-ignore
        const response: AuthResponse = yield call(authApi.refresh);
        localStorage.setItem('token', response.accessToken)
        yield put(authSlice.actions.refreshUserSuccess(response.user))
    } catch (error) {
        yield put(authSlice.actions.refreshUserError((error as Error).message))
    }
}

export function* authSaga() {
    yield takeEvery(authSlice.actions.loginUser, login)
    yield takeEvery(authSlice.actions.refreshUser, refresh)
    yield takeEvery(authSlice.actions.registrationUser, registration)
    yield takeEvery(authSlice.actions.logoutUser, logout)
}
