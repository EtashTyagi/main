import React from 'react';
import {StyledFullScreenWrapper} from "../style";
import {Toolbar, Typography} from "@mui/material";

const Index = () => {
    console.log("WTF")
    return (
        <StyledFullScreenWrapper alignItems={"center"}>
            <Toolbar/>
            <Typography variant={"h2"}>404 Not Found</Typography>
            <hr style={{width: "100%"}}/>
            <Typography variant={"subtitle1"}>We can not find the page you are looking for.</Typography>
        </StyledFullScreenWrapper>
    );
};

export default Index;