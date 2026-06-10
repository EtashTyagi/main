import {AppBar, styled} from "@mui/material";
import {APP_BAR_COLOR, belowLargeScreen, largeScreen, SIDEBAR_WIDTH} from "../../themes/constants";
import {AppThemes} from "../../themes/constants";

const StyledAppBar = styled(AppBar)(
    ({ theme }) => ({
        backgroundColor: APP_BAR_COLOR[theme.palette.mode === 'dark' ? AppThemes.DARK : AppThemes.LIGHT],
        backdropFilter: 'blur(12px)',
        [belowLargeScreen(theme)]: {
            width: "100%"
        },
        [largeScreen(theme)]: {
            width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
            marginLeft: SIDEBAR_WIDTH
        },
        '& .MuiToolbar-root': {
            justifyContent: 'space-between'
        }
    })
)

export default StyledAppBar