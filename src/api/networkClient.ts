import axios  from 'axios'
import configService from '../services/configService'

export const API_URL = configService.getByKey('REACT_APP_API_BASE_URL_DEV')

const $axios = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

$axios.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

const networkClient = {
  get: (url: string) => {
    return $axios.get(url)
  },
  put: (url: string, data: unknown) => {
    return $axios.put(url, data)
  },
  post: (url: string, data?: unknown) => {
    return $axios.post(url, data)
  },
  delete: (url: string) => {
    return $axios.delete(url)
  }
}

export default networkClient
