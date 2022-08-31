import {PaletteMode, Theme} from "@mui/material";
import Color from "color";

export enum AppThemes {
    LIGHT="LIGHT",
    DARK="DARK"
}

export const THEME_PALETTE = {
    [AppThemes.LIGHT]: {
        mode: "light" as PaletteMode,
        background: {
            default: Color("white").darken(0.01618).string()
        }
    },
    [AppThemes.DARK]: {
        mode: "dark" as PaletteMode,
    }
}

export const APP_BAR_COLOR = {
    [AppThemes.LIGHT]: "rgba(0,0,30, 0.4)",
    [AppThemes.DARK]: "rgba(0,0,30, 0.4)"
}

export const BACKDROP_COLOR = {
    [AppThemes.LIGHT]: "rgba(0,0,30, 0.4)",
    [AppThemes.DARK]: "rgba(30,0,0, 0.4)"
}

export const SIDEBAR_WIDTH = 300


export const MAIN_Y_PADDING = (theme: Theme) => theme.spacing(3)


export const CUSTOM_TOOLTIP_MAX_WIDTH = 220
export const CUSTOM_TOOLTIP_BACKGROUND = (theme: Theme) => {
    const color = Color(theme.palette.background.default)
    return (color.isDark() ? color.lighten(0.1618) : color.darken(0.08)).alpha(0.68).string()
}
export const CUSTOM_TOOLTIP_TEXT = (theme: Theme) => theme.palette.getContrastText(theme.palette.background.default)


export const SKILL_BADGE_SIDE_ABOVE_SMALL = 150

export const SKILL_BADGE_SIDE_SMALL = 128

export const GOLD_BACKGROUND = `radial-gradient(rgba(255, 215, 0, 0.95), ${Color("rgba(255, 215, 0, 0.95)").darken(0.1618).string()})`
export const TEXT_ON_GOLD = (theme: Theme) => theme.palette.getContrastText(Color("rgb(255, 215, 0)").darken(0.1618).string())

export const SILVER_BACKGROUND = `radial-gradient(rgba(192, 192, 192, 0.95), ${Color("rgba(192, 192, 192, 0.95)").darken(0.1618).string()})`
export const TEXT_ON_SILVER = (theme: Theme) => theme.palette.getContrastText(Color("rgb(255, 215, 0)").darken(0.1618).string())

export const BRONZE_BACKGROUND = `radial-gradient(rgba(150,116,68, 0.95), ${Color("rgba(150,116,68, 0.95)").darken(0.1618).string()})`
export const TEXT_ON_BRONZE = (theme: Theme) => theme.palette.getContrastText(Color("rgb(150,116,68)").darken(0.1618).string())

export const smallScreen = (theme: Theme) => {
    return theme.breakpoints.down("sm")
};
export const aboveSmallScreen = (theme: Theme) => {
    return theme.breakpoints.up("sm")
};
export const lowerMediumScreen = (theme: Theme) => {
    return theme.breakpoints.between("sm", "md")
}
export const mediumScreen = (theme: Theme) => {
    return theme.breakpoints.between("sm", "lg")
};

export const upperMediumScreen = (theme: Theme) => {
    return theme.breakpoints.between("md", "lg")
};

export const belowLargeScreen = (theme: Theme) => {
    return theme.breakpoints.down("lg")
};
export const largeScreen = (theme: Theme) => {
    return theme.breakpoints.up("lg")
};
