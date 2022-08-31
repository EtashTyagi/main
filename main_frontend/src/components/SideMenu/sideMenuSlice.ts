import { createSlice } from '@reduxjs/toolkit'

export interface ISideMenuAction {
    payload: boolean | undefined,
    type: string
}

const sideMenuSlice = createSlice({
    name: 'isSideMenuOpen',
    initialState: false,
    reducers: {
        setSideMenuOpen(state: boolean, action: ISideMenuAction) {
            const { payload } = action
            return payload as boolean
        },
    }
})

export const { setSideMenuOpen } = sideMenuSlice.actions
export default sideMenuSlice.reducer