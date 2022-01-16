import axios from 'axios'
import { API_URL } from 'Config/constants'

export async function getProjects() {
  const response = await axios.get(`${API_URL}/api/projects`)
  return response.data.data
}
