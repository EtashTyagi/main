import React, {useEffect, useRef, useState} from 'react';
import {Badge, Box, IconButton, Menu, MenuItem, Toolbar, Tooltip, useMediaQuery, useTheme} from "@mui/material";
import { DarkMode, Favorite, LightMode} from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import MoreIcon from '@mui/icons-material/MoreVert';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {AppThemes, largeScreen, smallScreen} from "../../themes/constants";
import {setSideMenuOpen} from "../SideMenu/sideMenuSlice";
import StyledAppBar from './style';
import Brand from "../Brand";
import {setGlobalTheme} from "../../themes/themeSlice";
import themes from "../../themes";
import {deleteLike, getLikeStatus, postLike} from "../../api/requests";

const Header = () => {
    const dispatch = useDispatch()
    const isSidebarOpen = useSelector((state: RootState) => state.isSideMenuOpen)
    const selectedTheme = useSelector((state: RootState) => state.theme)
    const latestLikeResponse = useSelector((state: RootState) => state.likeResponse)
    const theme = useTheme()
    const isLargeScreen = useMediaQuery(largeScreen(theme))
    const isSmallScreen = useMediaQuery(smallScreen(theme))
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const menuAnchor = useRef()

    useEffect(
        () => {
            getLikeStatus(dispatch)
        }
        , [dispatch])

    const toggleSidebar = () => {
        dispatch(setSideMenuOpen(!isSidebarOpen))
    }

    const toggleLike = () => {
        if (latestLikeResponse.userLiked) {
            deleteLike(dispatch)
        }  else {
            postLike(dispatch)
        }
    }

    const toggleGlobalTheme = () => {
        const newIndex = (Object.keys(themes).indexOf(selectedTheme) + 1) % Object.keys(themes).length
        const newKey = Object.keys(themes)[newIndex]
        dispatch(setGlobalTheme(newKey as AppThemes))
    }

    const toggleMenuOpen = () => {
        setMenuOpen(prev => !prev)
    }

    return (
        <Box>
            <StyledAppBar position="fixed" color={"primary"} elevation={0}>
                <Toolbar>
                    {
                        !isLargeScreen && <>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2 }}
                                onClick={toggleSidebar}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Brand/>
                        </>
                    }

                    <Box sx={{ flexGrow: 1 }} />
                    {
                        isSmallScreen &&
                        <Box ref={menuAnchor}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={"header-menu"}
                                onClick={toggleMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    }
                    {
                        !isSmallScreen &&
                        <Box >
                            <Tooltip title={"Message Me"}>
                                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                    <MailIcon />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title={"Like"}>
                                <IconButton
                                    size="large"
                                    aria-label={`${latestLikeResponse.totalLikes} likes`}
                                    color="inherit"
                                    onClick={toggleLike}
                                >
                                    <Badge badgeContent={latestLikeResponse.totalLikes} color="error">
                                        <Favorite />
                                    </Badge>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={"Theme"}>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="Theme"
                                    onClick={toggleGlobalTheme}
                                    color="inherit"
                                >
                                    {
                                        selectedTheme === AppThemes.LIGHT && <LightMode />
                                    }
                                    {
                                        selectedTheme === AppThemes.DARK && <DarkMode />
                                    }
                                </IconButton>
                            </Tooltip>
                        </Box>
                    }
                </Toolbar>
            </StyledAppBar>
            {isMenuOpen && isSmallScreen && <HeaderMenu isMenuOpen={isMenuOpen}
                                                        toggleMenuOpen={toggleMenuOpen}
                                                        toggleGlobalTheme={toggleGlobalTheme}
                                                        selectedTheme={selectedTheme}
                                                        anchor={menuAnchor.current}
                                                        likes={latestLikeResponse.totalLikes}
                                                        toggleLikes={toggleLike}
            />}
        </Box>
    );
};

interface IHeaderMenuProps {
    isMenuOpen: boolean,
    toggleMenuOpen: () => void,
    toggleGlobalTheme: () => void,
    selectedTheme: AppThemes,
    likes: number,
    toggleLikes: () => void,
    anchor?: HTMLElement,
}

const HeaderMenu = (props: IHeaderMenuProps) => {
    const {isMenuOpen, toggleMenuOpen, anchor, selectedTheme, toggleGlobalTheme, toggleLikes, likes} = props
    return (
        <Menu
            anchorEl={anchor}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={"header-menu"}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={toggleMenuOpen}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <MailIcon />
                </IconButton>
                <p>Message Me</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label={`${likes} likes`}
                    color="inherit"
                    onClick={toggleLikes}
                >
                    <Badge badgeContent={likes} color="error">
                        <Favorite />
                    </Badge>
                </IconButton>
                <p>Like</p>
            </MenuItem>
            <MenuItem onClick={toggleGlobalTheme}>
                <IconButton
                    size="large"
                    aria-label="Theme"
                    color="inherit"
                >
                    {
                        selectedTheme === AppThemes.LIGHT && <LightMode />
                    }
                    {
                        selectedTheme === AppThemes.DARK && <DarkMode />
                    }
                </IconButton>
                <p>Theme</p>
            </MenuItem>
        </Menu>
    )
}

export default Header;