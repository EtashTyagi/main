import React from 'react';
import {Chip, ChipProps, useTheme} from "@mui/material";
import {FrameworkTags, LanguageTags, TagToIcon, ToolsTags} from "../../constants/SkillAndProjectTags";
import {
    BRONZE_THRESHOLD,
    GOLD_THRESHOLD,
    MyCombinedRatings,
    SILVER_THRESHOLD
} from "../../constants/MyRatings";
import {
    BRONZE_BACKGROUND,
    GOLD_BACKGROUND,
    SILVER_BACKGROUND, TEXT_ON_BRONZE,
    TEXT_ON_GOLD,
    TEXT_ON_SILVER
} from "../../themes/constants";

export interface ISkillAndProjectTagChipProps extends ChipProps {
    tagName: LanguageTags | FrameworkTags | ToolsTags | string
}

const SkillAndProjectTagChip = (props: ISkillAndProjectTagChipProps) => {
    const theme = useTheme()

    const {tagName, ...chipProps} = props
    const rating = MyCombinedRatings[tagName] || 0
    const colorVariant = rating >= GOLD_THRESHOLD ? "gold"
        : rating >= SILVER_THRESHOLD ? "silver"
            : rating >= BRONZE_THRESHOLD ? "bronze" : undefined

    let background = undefined
    let color = undefined
    switch (colorVariant) {
        case "gold":
            background = GOLD_BACKGROUND
            color = TEXT_ON_GOLD(theme)
            break;
        case "silver":
            background = SILVER_BACKGROUND
            color = TEXT_ON_SILVER(theme)
            break;
        case "bronze":
            background = BRONZE_BACKGROUND
            color = TEXT_ON_BRONZE(theme)
            break;
    }

    return (
        <Chip {...chipProps} label={tagName}
            icon={React.cloneElement(TagToIcon[tagName] || <></>, {style: {color: color}})} sx={{...chipProps.sx, padding: 1,
            background: background, color: color}}
        />
    );
};

export default SkillAndProjectTagChip;