import {styled, Tooltip, tooltipClasses, TooltipProps} from "@mui/material";
import {CUSTOM_TOOLTIP_BACKGROUND, CUSTOM_TOOLTIP_MAX_WIDTH, CUSTOM_TOOLTIP_TEXT} from "../../themes/constants";

const ProppedTooltip = ({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} children={props.children}/>)

export const StyledCustomTooltip = styled(ProppedTooltip)(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: CUSTOM_TOOLTIP_BACKGROUND(theme),
        backdropFilter: "blur(8px)",
        maxWidth: CUSTOM_TOOLTIP_MAX_WIDTH + 20,
        color: CUSTOM_TOOLTIP_TEXT(theme),
        border: `1px solid ${theme.palette.divider}`,
    },
}));