import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import {Provider, useSelector} from "react-redux";
import store, {RootState} from "./store"
import themes from "./themes";
import {GlobalStyles, Theme} from "@mui/material";
import {createStyles} from "@mui/material/styles";
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

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
    }
})

const Index = () => {
    const theme = useSelector((state: RootState) => state.theme)
    return (
        <ThemeProvider theme={themes[theme]}>
            <CssBaseline enableColorScheme={true} />
            <GlobalStyles styles={rootStyle(themes[theme])}/>
            <App />
        </ThemeProvider>
    );
};

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Index/>
        </BrowserRouter>
    </Provider>
);