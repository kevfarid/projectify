import axios from 'axios'

export const getExample = () => {
  return axios.get('https://example.com').then((response) => response)
}
