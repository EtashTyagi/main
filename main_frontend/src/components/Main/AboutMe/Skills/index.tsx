import React from 'react';
import {Box, Stack, useMediaQuery, useTheme} from "@mui/material";
import {StyledFullScreenWrapper, SubTitleTypography, TitleTypography} from "../../style";
import SkillBadge from "./SkillBadge";
import MultipleItemCarousel from "../../../MultipleItemCarousel";
import {
    lowerMediumScreen,
    smallScreen,
    upperMediumScreen
} from "../../../../themes/constants";

import {ABOUT_ME_SKILLS_ID} from "../../../../constants/elementToId";
import {MyFrameworkRatings, MyLanguageRatings, MyToolRatings} from "../../../../constants/MyRatings";

const Skills = () => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(smallScreen(theme))
    const isLowerMediumScreen = useMediaQuery(lowerMediumScreen(theme))
    const isUpperMediumScreen = useMediaQuery(upperMediumScreen(theme))
    const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up("xl"))
    const itemsPerPage = isSmallScreen ? 2 : isLowerMediumScreen ? 3 : isUpperMediumScreen ? 4 : isExtraLargeScreen ? 7:5
    const autoPlay = isLowerMediumScreen || isSmallScreen
    return (
        <StyledFullScreenWrapper id={ABOUT_ME_SKILLS_ID} sx={{ position: 'relative' }}>
            <Box sx={{
                position: 'absolute',
                top: '10%',
                right: '-5%',
                width: '200px',
                height: '200px',
                opacity: 0.04,
                background: theme.palette.primary.main,
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                zIndex: 0
            }} />
            <TitleTypography sx={{ zIndex: 1 }}>
                Skills
            </TitleTypography>
            <Stack p={1} mt={1} sx={{ zIndex: 1 }}>
                <SubTitleTypography>
                    Programming Languages
                </SubTitleTypography>
                <MultipleItemCarousel sx={{py:1}} itemsPerPage={itemsPerPage} indicators={false}
                                      navButtonsAlwaysVisible={!autoPlay} autoPlay={autoPlay}>
                    {
                        Object.keys(MyLanguageRatings).sort((a, b) => MyLanguageRatings[b] - MyLanguageRatings[a]).map(
                            (e) => (
                                <SkillBadge title={e} key={e}/>
                            )
                        )
                    }
                </MultipleItemCarousel>
            </Stack>
            <Stack p={1} mt={1} sx={{ zIndex: 1 }}>
                <SubTitleTypography>
                    Frameworks
                </SubTitleTypography>
                <MultipleItemCarousel sx={{py:1}} itemsPerPage={itemsPerPage} indicators={false}
                                      navButtonsAlwaysVisible={!autoPlay} autoPlay={autoPlay}>
                    {
                        Object.keys(MyFrameworkRatings).sort((a, b) => MyFrameworkRatings[b] - MyFrameworkRatings[a]).map(
                            (e) => (
                                <SkillBadge title={e} key={e}/>
                            )
                        )
                    }
                </MultipleItemCarousel>
            </Stack>
            <Stack p={1} mt={1} sx={{ zIndex: 1 }}>
                <SubTitleTypography>
                    Tools
                </SubTitleTypography>
                <MultipleItemCarousel sx={{py:1}} itemsPerPage={itemsPerPage} indicators={false}
                                      navButtonsAlwaysVisible={!autoPlay} autoPlay={autoPlay}>
                    {
                        Object.keys(MyToolRatings).sort((a, b) => MyToolRatings[b] - MyToolRatings[a]).map(
                            (e) => (
                                <SkillBadge title={e} key={e}/>
                            )
                        )
                    }
                </MultipleItemCarousel>
            </Stack>
        </StyledFullScreenWrapper>
    );
};

export default Skills;