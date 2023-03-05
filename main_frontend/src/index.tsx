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

const rootStyle = (theme: Theme) => createStyles({
    '*::-webkit-scrollbar': {
        width: theme.spacing(1),
        height: theme.spacing(1)
    },
    '*::-webkit-scrollbar-track': {
        webkitBoxShadow: 'inset 0 0 4px rgba(0,0,0,0.2)'
    },
    '*::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.error.dark,
        borderRadius: theme.spacing(2),
        ':active': {
            backgroundColor: theme.palette.error.main
        }
    },
    "html": {
        scrollSnapType: "y mandatory"
    }
})

const Index = () => {
    const theme = useSelector((state: RootState) => state.theme)
    return (
        <ThemeProvider theme={themes[theme]}>
            <CssBaseline enableColorScheme={true} />
            <GlobalStyles styles={rootStyle(themes[theme])}/>
            <SnackbarProvider maxSnack={5}>
                <App />
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