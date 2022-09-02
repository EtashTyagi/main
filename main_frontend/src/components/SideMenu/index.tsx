import React, {useEffect} from 'react';
import StyledDrawer, {StyledDrawerBody, StyledDrawerHeader} from "./style";
import Close from "@mui/icons-material/Close";
import {Divider, IconButton, useMediaQuery, useTheme} from "@mui/material";
import {largeScreen, mediumScreen, smallScreen} from "../../themes/constants";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {setSideMenuOpen} from "./sideMenuSlice";
import Brand from "../Brand";
import MenuIcon from "@mui/icons-material/Menu";
import SideBarTreeView from "./SideBarTreeView";

const SideMenu = () => {
    const dispatch = useDispatch()
    const isOpen = useSelector((state: RootState) => state.isSideMenuOpen)
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(smallScreen(theme))
    const isMediumScreen = useMediaQuery(mediumScreen(theme))
    const isLargeScreen = useMediaQuery(largeScreen(theme))


    const toggleOpen = () => {
        dispatch(setSideMenuOpen(!isOpen))
    }
    const getVariant = () => {
        return isLargeScreen ? "permanent" : "temporary"
    }

    useEffect(() => {
        if (isLargeScreen) {
            dispatch(setSideMenuOpen(false))
        }
    }, [isLargeScreen, dispatch])

    return (
        <StyledDrawer open={isOpen}
                      variant={getVariant()}
                      onClose={toggleOpen} onOpen={toggleOpen}>
            <StyledDrawerHeader>
                {
                    isSmallScreen && <>
                        <Brand flexGrow={1} sx={{ ml: theme.spacing(1) }}/>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="close drawer"
                            onClick={toggleOpen}>
                            <Close />
                        </IconButton>
                    </>
                }
                {
                    isMediumScreen && <>
                        <IconButton
                            size="large"
                            color="inherit"
                            aria-label="close drawer"
                            sx={{ mr: 2, ml: theme.spacing(0.5)}}
                            onClick={toggleOpen}>
                            <MenuIcon/>
                        </IconButton>
                        <Brand flexGrow={1}/>
                    </>
                }
                {
                    isLargeScreen && <>
                        <Brand flexGrow={1} sx={{ ml: theme.spacing(1) }}/>
                    </>
                }
            </StyledDrawerHeader>
            <Divider/>
            <StyledDrawerBody width={"100%"}>
                <SideBarTreeView/>
            </StyledDrawerBody>
        </StyledDrawer>
    );
}


export default SideMenu;