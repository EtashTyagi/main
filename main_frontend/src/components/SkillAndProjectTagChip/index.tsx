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
import {useNavigate} from "react-router-dom";
import {PROJECTS_ROUTE} from "../../constants/routes";

export interface ISkillAndProjectTagChipProps extends ChipProps {
    tagName: LanguageTags | FrameworkTags | ToolsTags | string
}

const SkillAndProjectTagChip = (props: ISkillAndProjectTagChipProps) => {
    const theme = useTheme()
    const navigate = useNavigate()

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
            onClick={(e) => {
                e.stopPropagation()
                navigate(`${PROJECTS_ROUTE}?tag=${encodeURIComponent(tagName)}`)
            }}
            icon={React.cloneElement(TagToIcon[tagName] || <></>, {style: {color: color}})} sx={{...chipProps.sx, paddingLeft: 1.5, paddingRight: 3, paddingTop: 1, paddingBottom: 1,
            background: background, color: color, borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            cursor: 'pointer',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
                transform: 'scale(1.08) rotate(-1deg)',
                boxShadow: '0 4px 16px rgba(74, 124, 89, 0.2)'
            }
        }}
        />
    );
};

export default SkillAndProjectTagChip;