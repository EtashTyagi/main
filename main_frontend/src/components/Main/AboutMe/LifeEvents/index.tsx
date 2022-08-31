import React from 'react';
import {StyledFullScreenWrapper, TitleTypography} from "../../style";
import {AutoStories, ChildFriendly, School, Work} from "@mui/icons-material";
import {Timeline} from "@mui/lab";
import LifeTimelineItem from "./LifeTimelineItem";
import {Button, Divider, Stack, Typography} from "@mui/material";
import {CUSTOM_TOOLTIP_MAX_WIDTH} from "../../../../themes/constants";
import {ABOUT_ME_LIFE_EVENTS_ID} from "../../../../constants/elementToId";
// @ts-ignore
import Class10 from "../../../../downloads/class_10.pdf"
// @ts-ignore
import Class12 from "../../../../downloads/class_12.pdf"
import {useNavigate} from "react-router-dom";
import projectDetails from "../../../../constants/Projects";
import {PROJECTS_ROUTE} from "../../../../constants/routes";

const LifeEvents = () => {
    const navigate = useNavigate()

    return (
        <StyledFullScreenWrapper id={ABOUT_ME_LIFE_EVENTS_ID}>
            <TitleTypography>
                Life Events
            </TitleTypography>
            <Timeline style={{ justifyContent: "center", width: "100%"}}>
                <LifeTimelineItem date={"26 Sep 2001"} title={"Birth"} place={"Kolkata, West Bengal"}
                                  icon={<ChildFriendly/>}
                                  dotColor={"primary"}
                                  tooltipElement={
                    <>
                        <Typography variant={"subtitle1"} >Hello World :)</Typography>
                    </>
                }/>
                <LifeTimelineItem date={"Mar 2017"} title={"Class 10"} place={"Allahabad, Uttar Pradesh"}
                                  icon={<AutoStories/>}
                                  dotColor={"secondary"}
                                  description={"Army Public School, New Cantt"}
                                  tooltipElement={
                    <Stack width={CUSTOM_TOOLTIP_MAX_WIDTH}>
                        <Typography variant={"subtitle1"}>CBSE Board X</Typography>
                        <Divider/>
                        <Typography variant={"caption"} mt={1}>CGPA: 10</Typography>
                        <Button size={"small"} onClick={() => {window.open(Class10, "_blank")}}>
                            View Transcript
                        </Button>
                    </Stack>
                }/>
                <LifeTimelineItem date={"Mar 2019"} title={"Class 12"} place={"New Delhi, Delhi"}
                                  icon={<AutoStories/>}
                                  dotColor={"warning"}
                                  description={"Army Public School, Dhaula Kuan"}
                                  tooltipElement={
                    <Stack width={CUSTOM_TOOLTIP_MAX_WIDTH}>
                        <Typography variant={"subtitle1"}>CBSE Board XII</Typography>
                        <Divider/>
                        <Typography variant={"caption"} mt={1}>Subjects: Phy, Chem, Math, Bio</Typography>
                        <Typography variant={"caption"}>Percentage: 93.6</Typography>
                        <Button size={"small"} onClick={() => {window.open(Class12, "_blank")}}>
                            View Transcript
                        </Button>
                    </Stack>
                }/>
                <LifeTimelineItem date={"2019-2023"} title={"B.Tech"} place={"South Delhi, Delhi"}
                                  icon={<School/>}
                                  dotColor={"success"}
                                  description={"Indraprastha Institute of Information Technology"}
                                  tooltipElement={
                    <Stack width={CUSTOM_TOOLTIP_MAX_WIDTH}>
                        <Typography variant={"subtitle1"}>Computer Science</Typography>
                        <Divider/>
                        <Typography variant={"caption"} mt={0.35}>CGPA: 8.02 (6<sup>th</sup> semester)</Typography>
                    </Stack>
                }/>
                <LifeTimelineItem date={"May 2022 - Jul 2022"} title={"Internship"} place={"Gurgaon, Haryana"}
                                  icon={<Work/>}
                                  dotColor={"info"}
                                  description={"Deutsche Telekom Digital Labs"}
                                  tooltipElement={
                    <Stack width={CUSTOM_TOOLTIP_MAX_WIDTH}>
                        <Typography variant={"subtitle1"}>Software Intern</Typography>
                        <Divider/>
                        <Typography variant={"caption"} mt={1}><b>Work:</b> Dashboard to display audit logs.</Typography>
                        <Typography variant={"caption"}><b>Tech:</b> React, Typescript, Spring, Kibana, Logstash</Typography>
                        <Button size={"small"} onClick={() => {navigate(PROJECTS_ROUTE + "/" +projectDetails[3].slug)}}>
                            Project Info
                        </Button>
                    </Stack>
                }/>
                <LifeTimelineItem date={"Apr 2023"} title={"First Job"} place={"Pune/Bangalore"}
                                  icon={<Work/>} description={"Arista Networks"}/>
            </Timeline>
        </StyledFullScreenWrapper>
    );
};

export default LifeEvents;