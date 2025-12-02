import axios from 'axios'
const Api = axios.create({
    baseURL: import.meta.env.BASE_URL_API
})

export default Api