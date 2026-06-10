import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem, TimelineItemProps,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import { Box, Typography} from "@mui/material";
import React, {ReactElement} from "react";
import {TimelineDotPropsColorOverrides} from "@mui/lab/TimelineDot/TimelineDot";
import {OverridableStringUnion} from "@mui/types";
import CustomTooltip from "../../../../CustomTooltip";

interface ILifeTimelineProps extends TimelineItemProps{
    date: string,
    title: string,
    place?: string,
    description?: string,
    icon: ReactElement,
    tooltipElement?: ReactElement,
    dotColor?: OverridableStringUnion<'inherit' | 'grey' | 'primary' | 'secondary' | 'error' | 'info' | 'success'
        | 'warning', TimelineDotPropsColorOverrides>,

}

const LifeTimelineItem = (props: ILifeTimelineProps) => {
    const {date, title, place, description, tooltipElement, icon, dotColor, ...timelineItemProps} = props
    const item =  (
        <TimelineItem {...timelineItemProps} sx={{...timelineItemProps.sx, width: "100%"}}>
            <TimelineOppositeContent
                sx={{ pt: "20px", userSelect: "none" }}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                {date}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color={dotColor} sx={{
                    borderRadius: '50%',
                    boxShadow: '0 4px 12px rgba(74, 124, 89, 0.2)'
                }}>
                    {icon}
                </TimelineDot>
                <TimelineConnector sx={{
                    background: 'linear-gradient(180deg, rgba(74, 124, 89, 0.4) 0%, rgba(200, 169, 110, 0.4) 100%)',
                    width: '3px',
                    borderRadius: '3px'
                }} />
            </TimelineSeparator>
            <TimelineContent sx={{ px: 2 }}>
                <Box sx={{
                    background: 'rgba(74, 124, 89, 0.05)',
                    borderRadius: '24px 24px 40px 24px',
                    padding: '12px 16px',
                    transition: 'all 0.4s ease-in-out',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                        background: 'rgba(74, 124, 89, 0.1)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 24px rgba(74, 124, 89, 0.15)'
                    },
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-10px',
                        right: '-10px',
                        width: '60px',
                        height: '60px',
                        opacity: 0.05,
                        background: 'currentColor',
                        clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                    }
                }}>
                    <Typography variant="h6" sx={{ userSelect: "none", fontFamily: "'Lora', Georgia, serif" }}>
                        {title}
                    </Typography>
                    {
                        description ? <Typography variant={"subtitle2"}>{description}</Typography> : <></>
                    }
                    {
                        place ? <Typography variant={"caption"} sx={{ userSelect: "none"}}>{place}</Typography> : <></>
                    }
                </Box>
            </TimelineContent>
        </TimelineItem>
    )

    return (
        <>
            {
                tooltipElement ?
                    <CustomTooltip title={tooltipElement} placement={"top"} enterTouchDelay={0} leaveTouchDelay={5000}>
                        {item}
                    </CustomTooltip> :
                    <>
                        {item}
                    </>
            }
        </>
    )
}

export default LifeTimelineItem;