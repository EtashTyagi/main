import React, {ReactElement} from 'react';
import {Button, CardProps, Divider, Rating, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {SkillTitleTypography, StyledSkillBadgeWrapper} from "./style";
import {
    BRONZE_BACKGROUND, CUSTOM_TOOLTIP_MAX_WIDTH,
    GOLD_BACKGROUND,
    SILVER_BACKGROUND, smallScreen, TEXT_ON_BRONZE,
    TEXT_ON_GOLD,
    TEXT_ON_SILVER
} from "../../../../../themes/constants";
import {Star} from "@mui/icons-material";
import Color from "color";
import CustomTooltip from "../../../../CustomTooltip";
import {TagToIcon} from "../../../../../constants/SkillAndProjectTags";
import {
    BRONZE_ELEVATION,
    BRONZE_THRESHOLD,
    GOLD_ELEVATION,
    GOLD_THRESHOLD, MyCombinedRatings,
    SILVER_ELEVATION,
    SILVER_THRESHOLD
} from "../../../../../constants/MyRatings";

export interface ISkillBadgeProps extends CardProps {
    title: string,
}

const SkillBadge = (props: ISkillBadgeProps) => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(smallScreen(theme))
    const iconSize = isSmallScreen ? "54px" : "76px";
    const { title, ...cardProps} = props
    const rating = MyCombinedRatings[title]
    const icon = TagToIcon[title]
    const colorVariant = rating >= GOLD_THRESHOLD ? "gold"
        : rating >= SILVER_THRESHOLD ? "silver"
            : rating >= BRONZE_THRESHOLD ? "bronze" : undefined

    let background = undefined
    let color = undefined
    let elevation = undefined
    switch (colorVariant) {
        case "gold":
            background = GOLD_BACKGROUND
            color = TEXT_ON_GOLD(theme)
            elevation = GOLD_ELEVATION
            break;
        case "silver":
            background = SILVER_BACKGROUND
            color = TEXT_ON_SILVER(theme)
            elevation = SILVER_ELEVATION
            break;
        case "bronze":
            background = BRONZE_BACKGROUND
            color = TEXT_ON_BRONZE(theme)
            elevation = BRONZE_ELEVATION
            break;
    }

    return (
        <CustomTooltip title={
            <Stack width={CUSTOM_TOOLTIP_MAX_WIDTH}>
                <Typography variant={"subtitle1"}>{title}</Typography>
                <Divider/>
                <Typography variant={"caption"} mt={1}>Rating: {rating/5*100}%</Typography>
                <Button size={"small"}>{title} Projects</Button>
            </Stack>
        } enterTouchDelay={0} leaveTouchDelay={5000}>
            <StyledSkillBadgeWrapper {...cardProps}
                                     sx={{...cardProps.sx,
                                         background: background,
                                         color: color}} elevation={elevation}>
                <SkillTitleTypography>
                    {title}
                </SkillTitleTypography>
                {
                    React.cloneElement(icon, {
                        sx:{ width: "100%", height: iconSize}
                    })
                }
                {
                    rating ?
                        <Stack>
                            <Rating
                                defaultValue={rating} sx={{ alignSelf: "center"}}
                                precision={0.25}
                                icon={<Star fontSize={"small"} sx={{color: color}}/>}
                                emptyIcon={<Star fontSize={"small"} sx={{color: color ? Color(color).alpha(0.5).string() : undefined}}/>}
                                readOnly
                            />
                        </Stack>
                        : <></>
                }

            </StyledSkillBadgeWrapper>
        </CustomTooltip>
    );
};

export default SkillBadge;