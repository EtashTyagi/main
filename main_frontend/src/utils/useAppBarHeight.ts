import { useMediaQuery, useTheme } from '@mui/material';

type MinHeight = {
    minHeight: number,
};

export default function useAppBarHeight(): number {
    const {
        mixins: { toolbar },
        breakpoints,
    } = useTheme();
    const toolbarDesktopQuery = breakpoints.up('sm');
    const isDesktop = useMediaQuery(toolbarDesktopQuery);
    let currentToolbarMinHeight;
    if (isDesktop) {
        currentToolbarMinHeight = toolbar[toolbarDesktopQuery];
    } else {
        currentToolbarMinHeight = toolbar;
    }
    return (currentToolbarMinHeight as MinHeight).minHeight;
}