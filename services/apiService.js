
import axios from 'axios'

const apiClient = axios.create({
  baseURL: `${process.env.baseUrl}/`,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

export default {
    getAll() {
      return apiClient.get('')
    },
}