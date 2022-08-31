import {Box, CSSObject, Stack, styled, SwipeableDrawer, Theme} from "@mui/material";
import {aboveSmallScreen, mediumScreen, SIDEBAR_WIDTH, smallScreen} from "../../themes/constants";


const openedStyle = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    width: SIDEBAR_WIDTH,
    [smallScreen(theme)]: {
        borderRadius: theme.spacing(0, 1, 1, 0),
    }
});

const closedStyle = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: SIDEBAR_WIDTH,
    [smallScreen(theme)]: {
        borderRadius: theme.spacing(0, 1, 1, 0),
    }
});

const StyledDrawer = styled(SwipeableDrawer)(
    ({ theme, open, ModalProps }) => ({
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        '& .MuiDrawer-paper': {
            background: theme.palette.primary.main
        },
        ...(open && {
            ...openedStyle(theme),
            '& .MuiDrawer-paper': openedStyle(theme),
        }),
        ...(!open && {
            ...closedStyle(theme),
            '& .MuiDrawer-paper': closedStyle(theme),
        }),
    }),
);

export const StyledDrawerHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

export const StyledDrawerBody = styled(Stack)(({ theme }) => ({
    display: 'flex',
    paddingTop: theme.spacing( 1),
    paddingRight: theme.spacing( 1),
    ...theme.mixins.toolbar,
}));

export default StyledDrawer