import axios from 'axios'
import { API_URL } from 'Config/constants'

const token = sessionStorage.getItem('token')

export async function getProjects() {
  const response = await axios.get(`${API_URL}/api/projects`, {
    headers: {
      token,
    },
  })
  return response.data.data
}

export async function getProjectById(id) {
  const response = await axios.get(`${API_URL}/api/projects/${id}`, {
    headers: {
      token,
    },
  })
  return response.data.data
}
