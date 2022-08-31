import React from 'react';
import {Box} from "@mui/material";

import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    return (
        <Box>
            <Header/>
            <SideMenu/>
            <Main/>
        </Box>
    );
}

export default App;
