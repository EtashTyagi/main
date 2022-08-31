import {Box, Stack, styled, Typography, TypographyProps, useMediaQuery, useTheme} from "@mui/material";
import {
    aboveSmallScreen,
    largeScreen,
    MAIN_Y_PADDING,
    mediumScreen,
    SIDEBAR_WIDTH,
    smallScreen
} from "../../themes/constants";
import useAppBarHeight from "../../utils/useAppBarHeight";

const StyledMainBox = styled(Box)(
    ({theme}) => ({
        flexGrow: 1,
        [smallScreen(theme)]: {
            paddingBottom: MAIN_Y_PADDING(theme),
        },
        [mediumScreen(theme)]: {
            paddingBottom: MAIN_Y_PADDING(theme),
        },
        [largeScreen(theme)]: {
            marginLeft: SIDEBAR_WIDTH,
            paddingBottom: MAIN_Y_PADDING(theme),
        }
    })
)

export const TitleTypography = (props: TypographyProps) => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(smallScreen(theme))

    return <Typography {...props} variant={isSmallScreen ? "h2":"h1"}/>
}

export const SubTitleTypography = (props: TypographyProps) => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(smallScreen(theme))

    return <Typography {...props} variant={isSmallScreen ? "h4":"h3"} fontWeight={"bold"}/>
}

export const StyledFullScreenWrapper = styled(Stack)(
    ({theme}) => ({
        paddingTop: MAIN_Y_PADDING(theme),
        minHeight: `calc(100vh - ${useAppBarHeight()}px - ${MAIN_Y_PADDING(theme)})`,
        [smallScreen(theme)]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
        [aboveSmallScreen(theme)]: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
        },
    })
)

export default StyledMainBox