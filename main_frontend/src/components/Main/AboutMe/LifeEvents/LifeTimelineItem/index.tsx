import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem, TimelineItemProps,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import { Typography} from "@mui/material";
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
                <TimelineDot color={dotColor}>
                    {icon}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ px: 2 }}>
            <Typography variant="h6" sx={{ userSelect: "none"}}>
                {title}
            </Typography>
            {
                description ? <Typography variant={"subtitle2"}>{description}</Typography> : <></>
            }
            {
                place ? <Typography variant={"caption"} sx={{ userSelect: "none"}}>{place}</Typography> : <></>
            }
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