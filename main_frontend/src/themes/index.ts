import { createTheme } from '@mui/material/styles';
import {AppThemes, THEME_PALETTE} from "./constants";
import Color from 'color';


const index = (Object.keys(AppThemes) as (keyof typeof AppThemes)[]).map(
    (key) => {
        return {
            [key]: createTheme(
                {
                    palette: THEME_PALETTE[key],
                    components: {
                        MuiBackdrop: {
                            styleOverrides: {
                                root: ({theme}) => ({
                                    backdropFilter: "blur(3px)",
                                    backgroundColor: Color(theme.palette.common.black).alpha(0.4).string()
                                })
                            }
                        },
                        MuiAppBar: {
                            styleOverrides: {
                                colorPrimary: ({ownerState, theme}) => ({
                                    backdropFilter: "blur(8px)",
                                    backgroundColor: Color(theme.palette.background.default).alpha(0.68).string(),
                                    color: theme.palette.text.primary,
                                    borderBottom:  `1px solid ${theme.palette.divider}`,
                                }),
                            }
                        },
                        MuiDrawer: {
                            styleOverrides: {
                                paper: ({ownerState, theme}) => ({
                                    backdropFilter: "blur(8px)",
                                    backgroundColor: Color(theme.palette.background.default).alpha(0.9).string(),
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
