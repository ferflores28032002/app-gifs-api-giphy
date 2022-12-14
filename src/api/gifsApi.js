import axios from "axios";
import { config } from "../helpers/config";

const { VITE_APP_URL_API } = config()


export const gifsApi = axios.create({
    baseURL: VITE_APP_URL_API
})


