import { createTheme } from '@mui/material/styles';
import {APP_DRAWER_COLOR, AppThemes, ORGANIC_RADIUS_SM, THEME_PALETTE} from "./constants";
import Color from 'color';


const index = (Object.keys(AppThemes) as (keyof typeof AppThemes)[]).map(
    (key) => {
        return {
            [key]: createTheme(
                {
                    palette: THEME_PALETTE[key],
                    typography: {
                        fontFamily: "'Source Sans Pro', system-ui, sans-serif",
                        h1: {
                            fontFamily: "'Lora', Georgia, serif",
                            fontWeight: 600
                        },
                        h2: {
                            fontFamily: "'Lora', Georgia, serif",
                            fontWeight: 600
                        },
                        h3: {
                            fontFamily: "'Lora', Georgia, serif",
                            fontWeight: 600
                        },
                        h4: {
                            fontFamily: "'Lora', Georgia, serif",
                            fontWeight: 500
                        },
                        h5: {
                            fontFamily: "'Lora', Georgia, serif",
                            fontWeight: 500
                        },
                        h6: {
                            fontFamily: "'Lora', Georgia, serif",
                            fontWeight: 500
                        }
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
                                    backdropFilter: "blur(8px)",
                                    background: key === AppThemes.DARK
                                        ? `linear-gradient(135deg, ${Color("#2a2a1e").alpha(0.95).string()} 0%, ${Color("#3d5a44").alpha(0.92).string()} 100%)`
                                        : `linear-gradient(135deg, ${Color("#fffdf5").alpha(0.92).string()} 0%, ${Color("#e8f0e5").alpha(0.88).string()} 100%)`,
                                    color: theme.palette.text.primary,
                                    borderBottom: 'none',
                                    borderRadius: '0 0 24px 24px',
                                    boxShadow: '0 4px 20px rgba(74, 124, 89, 0.08)'
                                }),
                            }
                        },
                        MuiDrawer: {
                            styleOverrides: {
                                paper: ({ownerState, theme}) => ({
                                    backdropFilter: "blur(8px)",
                                    backgroundColor: APP_DRAWER_COLOR[key],
                                    color: theme.palette.text.primary,
                                    border: 'none',
                                    borderRadius: '0 40px 40px 0',
                                    boxShadow: '4px 0 24px rgba(74, 124, 89, 0.08)'
                                }),
                            },
                            defaultProps: {
                                elevation: 0
                            }
                        },
                        MuiButton: {
                            styleOverrides: {
                                root: {
                                    borderRadius: ORGANIC_RADIUS_SM,
                                    textTransform: 'none',
                                    fontWeight: 500
                                }
                            }
                        },
                        MuiChip: {
                            styleOverrides: {
                                root: {
                                    borderRadius: ORGANIC_RADIUS_SM
                                }
                            }
                        },
                        MuiCard: {
                            styleOverrides: {
                                root: {
                                    borderRadius: '24px 24px 60px 24px',
                                    boxShadow: '0 4px 20px rgba(74, 124, 89, 0.1)',
                                    border: 'none'
                                }
                            }
                        },
                        MuiPaper: {
                            styleOverrides: {
                                root: {
                                    borderRadius: ORGANIC_RADIUS_SM
                                }
                            }
                        },
                        MuiTooltip: {
                            styleOverrides: {
                                tooltip: {
                                    borderRadius: '16px'
                                }
                            }
                        },
                        MuiDivider: {
                            styleOverrides: {
                                root: {
                                    borderColor: key === AppThemes.DARK
                                        ? 'rgba(74, 124, 89, 0.2)'
                                        : 'rgba(61, 107, 79, 0.15)'
                                }
                            }
                        }
                    }
                }
            )
        }
    }
).reduce((prev, cur) => ({...prev, ...cur}))

export default index;
