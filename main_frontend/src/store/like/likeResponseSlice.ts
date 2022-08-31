import {createSlice} from '@reduxjs/toolkit'
import LikeResponse, {DEFAULT_LIKE_RESPONSE} from "./LikeResponse";

export interface IThemeAction {
    payload: LikeResponse,
    type: string
}

const likeResponseSlice = createSlice({
    name: 'likeResponse',
    initialState: DEFAULT_LIKE_RESPONSE,
    reducers: {
        setLikeResponse(state: LikeResponse, action: IThemeAction) {
            const { payload } = action
            return payload
        },
    }
})

export const { setLikeResponse } = likeResponseSlice.actions
export default likeResponseSlice.reducer