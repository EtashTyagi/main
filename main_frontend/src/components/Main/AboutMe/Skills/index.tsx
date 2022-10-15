import React, {useEffect} from 'react';
import {Stack, useMediaQuery, useTheme} from "@mui/material";
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
        <StyledFullScreenWrapper id={ABOUT_ME_SKILLS_ID}>
            <TitleTypography>
                Skills
            </TitleTypography>
            <Stack p={1} mt={1}>
                <SubTitleTypography >
                    Programming Languages
                </SubTitleTypography>
                <MultipleItemCarousel sx={{py:1}} itemsPerPage={itemsPerPage} indicators={false}
                                      navButtonsAlwaysVisible={!autoPlay} autoPlay={autoPlay}>
                    {
                        Object.keys(MyLanguageRatings).map(
                            (e) => (
                                <SkillBadge title={e} key={e}/>
                            )
                        )
                    }
                </MultipleItemCarousel>
            </Stack>
            <Stack p={1} mt={1}>
                <SubTitleTypography >
                    Frameworks
                </SubTitleTypography>
                <MultipleItemCarousel sx={{py:1}} itemsPerPage={itemsPerPage} indicators={false}
                                      navButtonsAlwaysVisible={!autoPlay} autoPlay={autoPlay}>
                    {
                        Object.keys(MyFrameworkRatings).map(
                            (e) => (
                                <SkillBadge title={e} key={e}/>
                            )
                        )
                    }
                </MultipleItemCarousel>
            </Stack>
            <Stack p={1} mt={1}>
                <SubTitleTypography >
                    Tools
                </SubTitleTypography>
                <MultipleItemCarousel sx={{py:1}} itemsPerPage={itemsPerPage} indicators={false}
                                      navButtonsAlwaysVisible={!autoPlay} autoPlay={autoPlay}>
                    {
                        Object.keys(MyToolRatings).map(
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