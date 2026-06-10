import {Card, styled, Typography, TypographyProps, useMediaQuery, useTheme} from "@mui/material";
import {
    aboveSmallScreen,
    SKILL_BADGE_SIDE_ABOVE_SMALL,
    SKILL_BADGE_SIDE_SMALL,
    smallScreen
} from "../../../../../themes/constants";

export const StyledSkillBadgeWrapper = styled(Card)(
    ({theme}) => ({
        padding: theme.spacing(1.5, 2, 1.5, 2),
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        boxShadow: '0 4px 20px rgba(74, 124, 89, 0.1)',
        transition: 'all 0.4s ease-in-out',
        '&:hover': {
            transform: 'rotate(-2deg) scale(1.05)',
            boxShadow: '0 8px 32px rgba(74, 124, 89, 0.18)'
        },
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

    return <Typography {...props} variant={isSmallScreen ? "h6":"h5"} fontWeight={"bold"} fontFamily="'Lora', Georgia, serif"/>
}
