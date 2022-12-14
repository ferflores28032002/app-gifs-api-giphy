import axios from "axios";


export const gifsApi = axios.create({
    baseURL: import.meta.env.VITE_APP_URL_API
})


