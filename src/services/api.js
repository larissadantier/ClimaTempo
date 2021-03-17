import axios from 'axios';

export const key = '71abd0c6';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
})

export default api;