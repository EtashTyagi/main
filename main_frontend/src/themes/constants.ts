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
            default: "#f5f0e8",
            paper: "#fffdf5"
        },
        text: {
            primary: "#2d2d1f",
            secondary: "#5a5a3f"
        },
        primary: {
            main: "#3d6b4f",
            light: "#5a8a6a",
            dark: "#2a4f3a"
        },
        secondary: {
            main: "#b8952a",
            light: "#d4b44a",
            dark: "#8a6f1f"
        },
        error: {
            main: "#8b6f47",
            light: "#a8895f",
            dark: "#6b5535"
        }
    },
    [AppThemes.DARK]: {
        mode: "dark" as PaletteMode,
        background: {
            default: "#1a1a12",
            paper: "#2a2a1e"
        },
        text: {
            primary: "#e8e4d9",
            secondary: "#b8b4a8"
        },
        primary: {
            main: "#4a7c59",
            light: "#6a9c79",
            dark: "#3a6249"
        },
        secondary: {
            main: "#c8a96e",
            light: "#e0c48e",
            dark: "#a8895a"
        },
        error: {
            main: "#8b6f47",
            light: "#a8895f",
            dark: "#6b5535"
        }
    }
}

export const APP_BAR_COLOR = {
    [AppThemes.DARK]: Color("#2a2a1e").alpha(0.92).string(),
    [AppThemes.LIGHT]: Color("#e2ebe2").alpha(0.88).string()
}

export const APP_DRAWER_COLOR = {
    [AppThemes.DARK]: Color("#2a2a1e").alpha(0.95).string(),
    [AppThemes.LIGHT]: Color("#e2ebe2").alpha(0.92).string()
}

export const SIDEBAR_WIDTH = 300


export const MAIN_Y_PADDING = (theme: Theme) => theme.spacing(3)


export const CUSTOM_TOOLTIP_MAX_WIDTH = 220
export const CUSTOM_TOOLTIP_BACKGROUND = (theme: Theme) => {
    const color = Color(theme.palette.background.default)
    return (color.isDark() ? color.lighten(0.1618) : color.darken(0.08)).alpha(0.68).string()
}
export const CUSTOM_TOOLTIP_TEXT = (theme: Theme) => theme.palette.getContrastText(theme.palette.background.default)


export const SKILL_BADGE_SIDE_ABOVE_SMALL = 180

export const SKILL_BADGE_SIDE_SMALL = 155

export const GOLD_BACKGROUND = `radial-gradient(rgba(200, 169, 110, 0.95), ${Color("rgba(200, 169, 110, 0.95)").darken(0.1618).string()})`
export const TEXT_ON_GOLD = (theme: Theme) => theme.palette.getContrastText(Color("rgb(200, 169, 110)").darken(0.1618).string())

export const SILVER_BACKGROUND = `radial-gradient(rgba(139, 111, 71, 0.95), ${Color("rgba(139, 111, 71, 0.95)").darken(0.1618).string()})`
export const TEXT_ON_SILVER = (theme: Theme) => theme.palette.getContrastText(Color("rgb(139, 111, 71)").darken(0.1618).string())

export const BRONZE_BACKGROUND = `radial-gradient(rgba(107, 85, 53, 0.95), ${Color("rgba(107, 85, 53, 0.95)").darken(0.1618).string()})`
export const TEXT_ON_BRONZE = (theme: Theme) => theme.palette.getContrastText(Color("rgb(107, 85, 53)").darken(0.1618).string())

export const NATURE_SHADOW = "0 4px 20px rgba(74, 124, 89, 0.1)"
export const NATURE_SHADOW_HOVER = "0 8px 32px rgba(74, 124, 89, 0.18)"

export const ORGANIC_RADIUS_SM = "24px"
export const ORGANIC_RADIUS_MD = "40px"
export const ORGANIC_RADIUS_LG = "60px"
export const ORGANIC_RADIUS_XL = "100px"

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

export const longScreen =  () => {
    return "@media (min-height: 850px)"
}