import React from 'react';
import {Box, Stack, Toolbar, useMediaQuery, useTheme} from "@mui/material";
import {MAIN_Y_PADDING, smallScreen} from "../../../../themes/constants";
import {StyledFullScreenWrapper, SubTitleTypography, TitleTypography} from "../../style";
import {ABOUT_ME_WELCOME_ID} from "../../../../constants/elementToId";
import ParticlesContainer from "./ParticlesContainer";

const Welcome = () => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(smallScreen(theme))

    return (
        <Stack>
            <Toolbar/>
            <StyledFullScreenWrapper sx={{
                justifyContent: "center",
                transform: `translateY(calc(-1*${MAIN_Y_PADDING(theme)}))`,
                position: 'relative',
                overflow: 'hidden'
            }} id={ABOUT_ME_WELCOME_ID}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '120%',
                    height: '120%',
                    borderRadius: '50% 50% 40% 60% / 60% 40% 60% 50%',
                    background: theme.palette.mode === 'dark'
                        ? 'radial-gradient(ellipse at center, rgba(74, 124, 89, 0.08) 0%, transparent 70%)'
                        : 'radial-gradient(ellipse at center, rgba(61, 107, 79, 0.05) 0%, transparent 70%)',
                    zIndex: 0,
                    pointerEvents: 'none',
                    animation: 'blobMorph 12s ease-in-out infinite',
                    '@keyframes blobMorph': {
                        '0%, 100%': { borderRadius: '50% 50% 40% 60% / 60% 40% 60% 50%' },
                        '33%': { borderRadius: '40% 60% 50% 50% / 50% 50% 40% 60%' },
                        '66%': { borderRadius: '60% 40% 60% 40% / 40% 60% 50% 50%' }
                    }
                }} />
                <Box sx={{
                    position: 'absolute',
                    bottom: '-10%',
                    right: '-5%',
                    width: '300px',
                    height: '300px',
                    opacity: 0.05,
                    background: theme.palette.primary.main,
                    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }} />
                <Box sx={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none'}}>
                   <ParticlesContainer/>
                </Box>
                <SubTitleTypography sx={{ zIndex: 1 }}>
                    Hey!<br/><br/> Welcome to my website<br/><br/> My name is <br/><br/>
                </SubTitleTypography>
                <Stack direction={"row"} flexWrap={"wrap"} sx={{ zIndex: 1 }}>
                    <TitleTypography fontFamily={"'Lora', Georgia, serif"} color={"primary"}>
                        Etash
                    </TitleTypography>
                    <TitleTypography ml={isSmallScreen ? theme.spacing(2): theme.spacing(3)}
                                     fontFamily={"'Lora', Georgia, serif"} color={"secondary"}>
                        Tyagi
                    </TitleTypography>
                </Stack>
                <SubTitleTypography sx={{ zIndex: 1, fontStyle: 'italic' }}>
                    <br/>And I am a software developer.
                </SubTitleTypography>
            </StyledFullScreenWrapper>
        </Stack>
    );
};

export default Welcome;