import axios from 'axios'
import { API_URL } from 'Config/constants'

export async function getReportById(id) {
  const response = await axios.get(`${API_URL}/api/reports/${id}`)
  return response.data.data
}

export async function addReport(data) {
  const response = await axios.post(`${API_URL}/api/reports`, data)
  return response.data.data
}

export async function updateReport(id, data) {
  const response = await axios.put(`${API_URL}/api/reports/${id}`, data)
  return response.data.data
}
