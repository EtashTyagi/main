import {AppBar, styled} from "@mui/material";
import {belowLargeScreen, largeScreen, SIDEBAR_WIDTH} from "../../themes/constants";

const StyledAppBar = styled(AppBar)(
    ({ theme }) => ({
        [belowLargeScreen(theme)]: {
            width: "100%"
        },
        [largeScreen(theme)]: {
            width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
            marginLeft: SIDEBAR_WIDTH
        },
    })
)

export default StyledAppBar