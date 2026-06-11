import {Box, CSSObject, Stack, styled, SwipeableDrawer, Theme} from "@mui/material";
import {APP_DRAWER_COLOR, SIDEBAR_WIDTH, smallScreen} from "../../themes/constants";
import {AppThemes} from "../../themes/constants";


const openedStyle = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    width: SIDEBAR_WIDTH,
    borderRadius: '0 0 40px 0',
    [smallScreen(theme)]: {
        borderRadius: '0 0 40px 0',
    }
});

const closedStyle = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: SIDEBAR_WIDTH,
    borderRadius: '0 0 40px 0',
    [smallScreen(theme)]: {
        borderRadius: '0 0 40px 0',
    }
});

const StyledDrawer = styled(SwipeableDrawer)(
    ({ theme, open, ModalProps }) => ({
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        '& .MuiDrawer-paper': {
            background: APP_DRAWER_COLOR[theme.palette.mode === 'dark' ? AppThemes.DARK : AppThemes.LIGHT],
            backdropFilter: 'blur(12px)',
            borderRadius: '0 0 40px 0',
            boxShadow: '4px 0 24px rgba(74, 124, 89, 0.08)'
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
    padding: theme.spacing(0, 2),
    ...theme.mixins.toolbar,
}));

export const StyledDrawerBody = styled(Stack)(({ theme }) => ({
    display: 'flex',
    paddingTop: theme.spacing( 2),
    paddingRight: theme.spacing( 2),
    paddingLeft: theme.spacing(1),
    ...theme.mixins.toolbar,
}));

export default StyledDrawer