import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../themes/themeSlice'
import sideMenuReducer from '../components/SideMenu/sideMenuSlice'
import likeResponseReducer from '../store/like/likeResponseSlice'


const store = configureStore({
    reducer: {
        theme: themeReducer,
        isSideMenuOpen: sideMenuReducer,
        likeResponse: likeResponseReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store