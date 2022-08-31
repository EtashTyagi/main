import React from 'react';
import { Divider, Stack} from "@mui/material";
import Welcome from "./Welcome";
import LifeEvents from "./LifeEvents";
import Skills from "./Skills";

const AboutMe = () => {
    return (
        <Stack>
            <Welcome/>
            <Divider/>
            <Skills/>
            <Divider/>
            <LifeEvents/>
            <Divider/>
        </Stack>
    );
};

export default AboutMe;