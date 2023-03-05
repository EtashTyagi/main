import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TreeView from '@mui/lab/TreeView';
import TreeItem, { TreeItemProps, treeItemClasses } from '@mui/lab/TreeItem';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SvgIconProps } from '@mui/material/SvgIcon';
import {
    AccountCircle,
    Dns, Download,
    Engineering,
    Handshake,
    Handyman,
    TimelineRounded
} from "@mui/icons-material";
import {useMediaQuery, useTheme} from "@mui/material";
import { Link as ScrollLink } from 'react-scroll'
import {ABOUT_ME_LIFE_EVENTS_ID, ABOUT_ME_SKILLS_ID, ABOUT_ME_WELCOME_ID} from "../../constants/elementToId";
import { useNavigate, useLocation } from 'react-router-dom';
import {ABOUT_ME_ROUTE, PROFILES_ROUTE, OTHER_SITES_ROUTE, DOWNLOADS_ROUTE, PROJECTS_ROUTE} from "../../constants/routes";
import projectDetails from "../../constants/Projects";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setSideMenuOpen} from "./sideMenuSlice";
import {smallScreen} from "../../themes/constants";
import MyProfiles from "../../constants/MyProfiles";
import MyDownloads from "../../constants/MyDownloads";

type StyledTreeItemProps = TreeItemProps & {
    bgColor?: string;
    color?: string;
    labelIcon: React.ElementType<SvgIconProps>;
    labelInfo?: string;
    labelText: string;
};

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({

    [`& .${treeItemClasses.content}`]: {

        borderTopRightRadius: theme.spacing(2),
        borderBottomRightRadius: theme.spacing(2),
        paddingRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        '&.Mui-expanded': {
            fontWeight: theme.typography.fontWeightRegular,
        },
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
        '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
            backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
        },
        [`& .${treeItemClasses.label}`]: {
            fontWeight: 'inherit',
        },
    },
    [`& .${treeItemClasses.group}`]: {
        marginLeft: 0,
        [`& .${treeItemClasses.content}`]: {
            paddingLeft: theme.spacing(2),
        },
    },
}));

function StyledTreeItem(props: StyledTreeItemProps) {
    const {
        bgColor,
        color,
        labelIcon: LabelIcon,
        labelInfo,
        labelText,
        ...other
    } = props;

    return (
        <StyledTreeItemRoot
            label={
                <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
                    <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
                    <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
                        {labelText}
                    </Typography>
                    <Typography variant="caption" color="inherit">
                        {labelInfo}
                    </Typography>
                </Box>
            }

            {...other}
        />
    );
}

export default function SideBarTreeView() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(smallScreen(theme))

    const [expanded, setExpanded] = useState(
        location.pathname.substring(0, PROJECTS_ROUTE.length) === PROJECTS_ROUTE ?
        PROJECTS_ROUTE :
        location.pathname
    )
    const [selected, setSelected] = useState(location.pathname)

    const collapseIfSmall = () => {
        if (isSmallScreen) {
            dispatch(setSideMenuOpen(false))
        }
    }
    const navigateToOuter = (path: string) => {
        setSelected(path)
        setExpanded(path)
        collapseIfSmall()
        navigate(path)
    }
    const navigateToInner = (path: string) => {
        setSelected(path)
        collapseIfSmall()
        navigate(path)
    }
    const fakeNavigateToOuter = (path: string) => {
        setSelected(path)
        setExpanded(path)
    }
    const fakeNavigateToInner = (path: string) => {
        setSelected(path)
    }

    return (
        <TreeView
            aria-label="gmail"
            expanded={[expanded]}
            selected={[selected]}
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightIcon />}
            defaultEndIcon={<div style={{ width: 24 }} />}
            sx={{ flexGrow: 1, overflowY: 'auto' }}
        >
            <StyledTreeItem nodeId={OTHER_SITES_ROUTE} labelText="Other Sites" labelIcon={Dns}
                            onClick={() => navigateToOuter(OTHER_SITES_ROUTE)}/>
            <StyledTreeItem nodeId={ABOUT_ME_ROUTE} labelText="About Me" labelIcon={InfoIcon}
                            onClick={() => navigateToOuter(ABOUT_ME_ROUTE)}>
                <ScrollLink to={ABOUT_ME_WELCOME_ID} spy={true} smooth={true} onClick={collapseIfSmall}>
                    <StyledTreeItem
                        nodeId={ABOUT_ME_WELCOME_ID}
                        labelText="Welcome"
                        labelIcon={Handshake}
                        sx={{ml: 0.5}}
                    />
                </ScrollLink>

                <ScrollLink to={ABOUT_ME_SKILLS_ID} spy={true} smooth={true} onClick={collapseIfSmall}>
                    <StyledTreeItem
                        nodeId={ABOUT_ME_SKILLS_ID}
                        labelText="Skills"
                        labelIcon={Engineering}
                        sx={{ml: 0.5}}
                    />
                </ScrollLink>
                <ScrollLink to={ABOUT_ME_LIFE_EVENTS_ID} spy={true} smooth={true} onClick={collapseIfSmall}>
                    <StyledTreeItem
                        nodeId={ABOUT_ME_LIFE_EVENTS_ID}
                        labelText="Life Events"
                        labelIcon={TimelineRounded}
                        sx={{ml: 0.5}}
                    />
                </ScrollLink>
            </StyledTreeItem>
            <StyledTreeItem nodeId={PROJECTS_ROUTE} labelText="Projects" labelIcon={Handyman}
                onClick={() => navigateToOuter(PROJECTS_ROUTE)}>
                {
                    projectDetails.map(
                        (e) => (
                            <StyledTreeItem sx={{ml: 0.5}}
                                nodeId={PROJECTS_ROUTE+"/"+e.slug}
                                labelIcon={e.sideBarIcon}
                                labelText={e.sidebarTitle}
                                onClick={() => navigateToInner(PROJECTS_ROUTE+"/"+e.slug)}
                                key={PROJECTS_ROUTE+"/"+e.slug}
                            />
                        )
                    )
                }
            </StyledTreeItem>
            <StyledTreeItem nodeId={PROFILES_ROUTE} labelText="Profiles" labelIcon={AccountCircle}
                            onClick={() => {fakeNavigateToOuter(PROFILES_ROUTE)}}>
                {
                    MyProfiles.map(
                        (e) => (
                                    <StyledTreeItem key={e.name}
                                                    nodeId={PROFILES_ROUTE+"/"+e.name}
                                                    labelIcon={e.icon} labelText={e.name}
                                                    onClick={() => {
                                                        fakeNavigateToInner(PROFILES_ROUTE+"/"+e.name);
                                                        window.open(e.url, "_blank")
                                                    }}/>
                        )
                    )
                }
            </StyledTreeItem>
            <StyledTreeItem nodeId={DOWNLOADS_ROUTE} labelText="Downloads" labelIcon={Download}
                            onClick={() => {fakeNavigateToOuter(DOWNLOADS_ROUTE)}}>
                {
                    MyDownloads.map(
                        (e) => (
                            <StyledTreeItem nodeId={DOWNLOADS_ROUTE+"/"+e.path} labelIcon={e.icon} labelText={e.name}
                                            onClick={() => {
                                                fakeNavigateToInner(PROFILES_ROUTE+"/"+e.path);
                                                window.open(e.path, "_blank")
                                            }}
                                            key={e.name}
                            />
                        )
                    )
                }
            </StyledTreeItem>
        </TreeView>
    );
}
