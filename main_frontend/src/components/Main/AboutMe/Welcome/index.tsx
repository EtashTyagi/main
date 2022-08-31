import React from 'react';
import {Stack, Toolbar, useMediaQuery, useTheme} from "@mui/material";
import {MAIN_Y_PADDING, smallScreen} from "../../../../themes/constants";
import {StyledFullScreenWrapper, SubTitleTypography, TitleTypography} from "../../style";
import {ABOUT_ME_WELCOME_ID} from "../../../../constants/elementToId";
import WelcomeBackgroundDark from "../../../../resources/WelcomeBackgroundDark.svg"
import WelcomeBackgroundLight from "../../../../resources/WelcomeBackgroundLight.svg"

const Welcome = () => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(smallScreen(theme))
    return (
        <Stack sx={{
            backgroundImage: `url(${theme.palette.mode === "dark" ? WelcomeBackgroundDark: WelcomeBackgroundLight })`,
            backgroundSize: "100% 100%",
            backgroundPosition: "50% 50%"
        }}>
            <Toolbar/>
            <StyledFullScreenWrapper sx={{
                justifyContent: "center",
                transform: `translateY(calc(-1*${MAIN_Y_PADDING(theme)}))`
            }} id={ABOUT_ME_WELCOME_ID}>
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