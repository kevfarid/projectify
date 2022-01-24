import axios from 'axios'
import { API_URL } from 'Config/constants'

const token = sessionStorage.getItem('token')

export async function getReportById(id) {
  const response = await axios.get(`${API_URL}/api/reports/${id}`, {
    headers: {
      token,
    },
  })
  return response.data.data
}

export async function addReport(data) {
  const response = await axios.post(`${API_URL}/api/reports`, data, {
    headers: {
      token,
    },
  })
  return response.data.data
}

export async function updateReport(id, data) {
  const response = await axios.put(`${API_URL}/api/reports/${id}`, data, {
    headers: {
      token,
    },
  })
  return response.data.data
}
