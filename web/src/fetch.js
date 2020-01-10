import axios from 'axios'

const fetch = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/api/admin/rest'
})

export default fetch
