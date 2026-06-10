import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import {Provider, useSelector} from "react-redux";
import store, {RootState} from "./store"
import themes from "./themes";
import {GlobalStyles, Theme} from "@mui/material";
import {createStyles} from "@mui/material/styles";
import {BrowserRouter} from "react-router-dom";
import {SnackbarProvider} from "notistack";
import SmoothScroll from "./components/SmoothScroll";

const rootStyle = (theme: Theme) => createStyles({
    '*::-webkit-scrollbar': {
        width: theme.spacing(1.5),
        height: theme.spacing(1.5)
    },
    '*::-webkit-scrollbar-track': {
        background: 'rgba(74, 124, 89, 0.05)',
        borderRadius: '12px'
    },
    '*::-webkit-scrollbar-thumb': {
        background: 'linear-gradient(180deg, #4a7c59 0%, #3d6b4f 100%)',
        borderRadius: '12px',
        border: '2px solid transparent',
        backgroundClip: 'padding-box',
        ':hover': {
            background: 'linear-gradient(180deg, #5a8c69 0%, #4d7b5f 100%)',
            backgroundClip: 'padding-box'
        }
    },
    'html': {
        scrollBehavior: 'auto'
    },
    'body': {
        overflowX: 'hidden'
    }
})

const Index = () => {
    const theme = useSelector((state: RootState) => state.theme)
    return (
        <ThemeProvider theme={themes[theme]}>
            <CssBaseline enableColorScheme={true} />
            <GlobalStyles styles={rootStyle(themes[theme])}/>
            <SnackbarProvider maxSnack={5}>
                <SmoothScroll>
                    <App />
                </SmoothScroll>
            </SnackbarProvider>
        </ThemeProvider>
    );
};

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Index/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)