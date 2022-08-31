import {Card, styled, Typography, TypographyProps, useMediaQuery, useTheme} from "@mui/material";
import {
    aboveSmallScreen,
    SKILL_BADGE_SIDE_ABOVE_SMALL,
    SKILL_BADGE_SIDE_SMALL,
    smallScreen
} from "../../../../../themes/constants";

export const StyledSkillBadgeWrapper = styled(Card)(
    ({theme}) => ({
        padding: theme.spacing(0.5, 1, 0.5, 1),
        [smallScreen(theme)]: {
            minHeight: SKILL_BADGE_SIDE_SMALL,
            minWidth: SKILL_BADGE_SIDE_SMALL
        },
        [aboveSmallScreen(theme)]: {
            minHeight: SKILL_BADGE_SIDE_ABOVE_SMALL,
            minWidth: SKILL_BADGE_SIDE_ABOVE_SMALL
        }

    })
)

export const SkillTitleTypography = (props: TypographyProps) => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(smallScreen(theme))

    return <Typography {...props} variant={isSmallScreen ? "h6":"h5"} fontWeight={"bold"}/>
}
