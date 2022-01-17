import axios from 'axios'
import { API_URL } from 'Config/constants'

export function login({ email, password }) {
  return axios.post(`${API_URL}/api/auth/login`, {
    email,
    password,
  })
}
