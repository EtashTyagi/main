import axios from "axios";
import axiosRequestConfig from "./config";
import {requestInterceptor, responseInterceptor} from "./interceptors";

const axiosInstance = axios.create(axiosRequestConfig)

axiosInstance.interceptors.request.use(
    requestInterceptor
)

axiosInstance.interceptors.response.use(
    responseInterceptor
)


export default axiosInstance