import { AxiosResponse } from 'axios'
import { User } from '../models/User'
import networkClient from './networkClient'

export interface AuthResponse {
    user: User,
    accessToken: string,
    refreshToken: string
}

class AuthApi {
    login = async (email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
        const response = await networkClient.post('/login', { email, password })
        return response.data
    }
    registration = async (email: string, userName: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
        const response = await networkClient.post('/registration', { email, password, userName })
        return response.data
    }
    logout = async () => {
        const response = await networkClient.post('/logout')
        return response.data
    }
    refresh = async (): Promise<AxiosResponse<AuthResponse>> => {
        const response = await networkClient.get('/refresh')
        return response.data
    }
}

export default new AuthApi()
