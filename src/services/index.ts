import axios from 'axios' 
import { podcastToken, podcastUrl } from './config'

const Api = axios.create({
  baseURL: podcastUrl,
})

Api.interceptors.request.use(
  (request: any) => {
    const token = podcastToken
    if (token) {
      request.headers.Authorization = token
    }
    return request
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

Api.interceptors.response.use(
  (response: any) => {
    return response.data
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

export default Api