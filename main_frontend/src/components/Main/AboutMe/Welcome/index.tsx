import React, {useCallback} from 'react';
import {Stack, Toolbar, useMediaQuery, useTheme} from "@mui/material";
import {MAIN_Y_PADDING, smallScreen} from "../../../../themes/constants";
import {StyledFullScreenWrapper, SubTitleTypography, TitleTypography} from "../../style";
import {ABOUT_ME_WELCOME_ID} from "../../../../constants/elementToId";
import WelcomeBackgroundDark from "../../../../resources/WelcomeBackgroundDark.svg"
import WelcomeBackgroundLight from "../../../../resources/WelcomeBackgroundLight.svg"
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";

const Welcome = () => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(smallScreen(theme))
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFireworksPreset(engine);
    }, []);
    const particlesLoaded = useCallback(async (container: Container | undefined) => {}, []);

    return (
        <Stack>
            <Toolbar/>
            <StyledFullScreenWrapper sx={{
                justifyContent: "center",
                transform: `translateY(calc(-1*${MAIN_Y_PADDING(theme)}))`
            }} id={ABOUT_ME_WELCOME_ID}>
                <div style={{zIndex: "-1"}}>
                    <Particles id="tsparticles"
                               options={{preset: "fireworks",
                                   background: {color: theme.palette.background.default},
                                   particles: {move: {trail: {fillColor: theme.palette.background.default, enable: true}},
                                       life: {
                                           count: 1,
                                           duration: {
                                               value: {
                                                   min: 1.5,
                                                   max: 1.75
                                               }
                                           }
                                       },
                                   },
                               }}
                               init={particlesInit} loaded={particlesLoaded} />
                </div>
                <SubTitleTypography>
                    Hey!<br/><br/> Welcome To my website<br/><br/> My name is <br/><br/>
                </SubTitleTypography>
                <Stack direction={"row"} flexWrap={"wrap"} >
                    <TitleTypography  fontFamily={'ariel'} color={"error"}>
                        Etash
                    </TitleTypography>
                    <TitleTypography ml={isSmallScreen ? theme.spacing(2): theme.spacing(3)}
                                     fontFamily={'ariel'} color={"secondary"}>
                        Tyagi
                    </TitleTypography>
                </Stack>
                <SubTitleTypography >
                    <br/>And I am a software developer.
                </SubTitleTypography>
            </StyledFullScreenWrapper>
        </Stack>
    );
};

export default Welcome;