import axiosInstance from "./index";
import {LIKE_SLUG} from "./constants";
import {setLikeResponse} from "../store/like/likeResponseSlice";
import {AnyAction, Dispatch} from "redux";
import {AxiosResponse} from "axios";
import {DEFAULT_LIKE_RESPONSE} from "../store/like/LikeResponse";

export const getLikeStatus = async (dispatch: Dispatch<AnyAction>) => {
    try {
        const response = await axiosInstance.get(LIKE_SLUG)
        dispatch(setLikeResponse(response.data))
        return response
    } catch (e: any) {
        console.log(e)
        return await new Promise<ApiResponseType>((resolve) => {
            resolve ({
                status: -1,
                data: e.message
            })
        })
    }
}

export const postLike = async (dispatch: Dispatch<AnyAction>) => {
    dispatch(setLikeResponse(DEFAULT_LIKE_RESPONSE))
    try {
        const response = await axiosInstance.post(LIKE_SLUG)
        dispatch(setLikeResponse(response.data))
        return response
    } catch (e: any) {
        console.log(e)
        return await new Promise<ApiResponseType>((resolve) => {
            resolve ({
                status: -1,
                data: e.message
            })
        })
    }
}

export const deleteLike  = async (dispatch: Dispatch<AnyAction>) => {
    dispatch(setLikeResponse(DEFAULT_LIKE_RESPONSE))
    try {
        const response = await axiosInstance.delete(LIKE_SLUG)
        dispatch(setLikeResponse(response.data))
        return response
    } catch (e: any) {
        console.log(e)
        return await new Promise<ApiResponseType>((resolve) => {
            resolve ({
                status: -1,
                data: e.message
            })
        })
    }
}

export type ApiResponseType = AxiosResponse | {
    status: number,
    data: unknown
}