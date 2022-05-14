import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../models/User'

export interface AuthState {
    user: User | null,
    isAuth: boolean,
    loading: boolean,
    error: string,
}

const initialState: AuthState = {
    user: null,
    isAuth: false,
    loading: false,
    error: '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser(state, action: PayloadAction<{ email: string, password: string }>) {
            state.loading = true
        },
        loginUserSuccess(state, action: PayloadAction<User>) {
            state.user = action.payload
            state.isAuth = true
            state.loading = false
        },
        loginUserError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.isAuth = false
            state.loading = false
        },
        registrationUser(state, action: PayloadAction<{ email: string, password: string, userName: string }>) {
            state.loading = true
        },
        registrationUserSuccess(state, action: PayloadAction<User>) {
            state.user = action.payload
            state.isAuth = true
            state.loading = false
        },
        registrationUserError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.isAuth = false
            state.loading = false
        },
        refreshUser(state) {
            state.loading = true
        },
        refreshUserSuccess(state, action: PayloadAction<User>) {
            state.user = action.payload
            state.isAuth = true
            state.loading = false
        },
        refreshUserError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.isAuth = false
            state.loading = false
        },
        logoutUser(state) {
            state.loading = true
        },
        logoutUserSuccess(state) {
            state.user = null
            state.isAuth = false
            state.loading = false
        },
        logoutUserError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.isAuth = false
            state.loading = false
        },
    }
})

export default authSlice.reducer
