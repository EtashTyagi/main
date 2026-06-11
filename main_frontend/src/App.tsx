import React from 'react';
import {Box} from "@mui/material";

import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import Main from "./components/Main";
import FallingLeaves from "./components/FallingLeaves";

function App() {
    return (
        <Box>
            <FallingLeaves />
            <Header/>
            <SideMenu/>
            <Main/>
        </Box>
    );
}

export default App;
