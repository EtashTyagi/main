import axiosInstance from "./index";
import {LIKE_SLUG} from "./constants";
import {setLikeResponse} from "../store/like/likeResponseSlice";
import {AnyAction, Dispatch} from "redux";

export const getLikeStatus = async (dispatch: Dispatch<AnyAction>) => {
    try {
        const response = await axiosInstance.get(LIKE_SLUG)
        dispatch(setLikeResponse(response.data))
    } catch (e) {
        console.log(e)
    }
}

export const postLike = async (dispatch: Dispatch<AnyAction>) => {
    try {
        const response = await axiosInstance.post(LIKE_SLUG)
        dispatch(setLikeResponse(response.data))
    } catch (e) {
        console.log(e)
    }
}

export const deleteLike  = async (dispatch: Dispatch<AnyAction>) => {
    try {
        const response = await axiosInstance.delete(LIKE_SLUG)
        dispatch(setLikeResponse(response.data))
    } catch (e) {
        console.log(e)
    }
}