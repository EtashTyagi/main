import {createSlice} from '@reduxjs/toolkit'
import {AppThemes} from "./constants";
import Keys from "../constants/localStorageKeys";

export interface IThemeAction {
    payload: AppThemes,
    type: string
}

const getStoredTheme = (): AppThemes => {
    let storedTheme = localStorage.getItem(Keys.THEME)
    return storedTheme && Object.keys(AppThemes).includes(storedTheme) ?
        storedTheme as AppThemes
        : AppThemes.DARK
}

const themeSlice = createSlice({
    name: 'themes',
    initialState: getStoredTheme(),
    reducers: {
        setGlobalTheme(state: AppThemes, action: IThemeAction) {
            const { payload } = action
            localStorage.setItem(Keys.THEME, payload)
            return payload
        },
    }
})

export const { setGlobalTheme } = themeSlice.actions
export default themeSlice.reducer