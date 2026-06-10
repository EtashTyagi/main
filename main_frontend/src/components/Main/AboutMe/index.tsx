import React from 'react';
import { Box, Stack} from "@mui/material";
import Welcome from "./Welcome";
import LifeEvents from "./LifeEvents";
import Skills from "./Skills";

const OrganicDivider = () => (
    <Box sx={{
        height: '3px',
        mx: 'auto',
        my: 4,
        width: '60%',
        background: 'linear-gradient(90deg, transparent 0%, rgba(74, 124, 89, 0.4) 30%, rgba(200, 169, 110, 0.4) 70%, transparent 100%)',
        borderRadius: '3px'
    }} />
);

const AboutMe = () => {
    return (
        <Stack>
            <Welcome/>
            <OrganicDivider/>
            <Skills/>
            <OrganicDivider/>
            <LifeEvents/>
            <OrganicDivider/>
        </Stack>
    );
};

export default AboutMe;