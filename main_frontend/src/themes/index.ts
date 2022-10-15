import { createTheme } from '@mui/material/styles';
import {APP_BAR_COLOR, APP_DRAWER_COLOR, AppThemes, THEME_PALETTE} from "./constants";
import Color from 'color';


const index = (Object.keys(AppThemes) as (keyof typeof AppThemes)[]).map(
    (key) => {
        return {
            [key]: createTheme(
                {
                    palette: THEME_PALETTE[key],
                    typography: {

                    },
                    components: {
                        MuiBackdrop: {
                            styleOverrides: {
                                root: ({theme}) => ({
                                    backdropFilter: "blur(3px)",
                                    backgroundColor: Color(theme.palette.common.black).alpha(0.1618).string()
                                })
                            }
                        },
                        MuiAppBar: {
                            styleOverrides: {
                                colorPrimary: ({ownerState, theme}) => ({
                                    backdropFilter: "blur(4px)",
                                    backgroundColor: APP_BAR_COLOR[key],
                                    color: theme.palette.text.primary,
                                    borderBottom:  `1px solid ${theme.palette.divider}`,
                                }),
                            }
                        },
                        MuiDrawer: {
                            styleOverrides: {
                                paper: ({ownerState, theme}) => ({
                                    backdropFilter: "blur(8px)",
                                    backgroundColor: APP_DRAWER_COLOR[key],
                                    color: theme.palette.text.primary,
                                    borderBottom:  `1px solid ${theme.palette.divider}`,
                                }),
                            },
                            defaultProps: {
                                elevation: 0
                            }
                        }
                    }
                }
            )
        }
    }
).reduce((prev, cur) => ({...prev, ...cur}))

export default index;
