import {AxiosRequestConfig, AxiosResponse} from "axios";

export const requestInterceptor = (req: AxiosRequestConfig) => {
    return req
}

export const responseInterceptor = (req: AxiosResponse) => {
    return req
}