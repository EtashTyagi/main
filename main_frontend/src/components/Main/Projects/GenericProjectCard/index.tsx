import React from 'react';
import {Card, CardProps, Chip, Grid, Skeleton, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {IProject} from "../../../../constants/Projects";
import {smallScreen} from "../../../../themes/constants";
import SkillAndProjectTagChip from "../../../SkillAndProjectTagChip";
import {useNavigate} from "react-router-dom";
import {PROJECTS_ROUTE} from "../../../../constants/routes";
import {MyCombinedRatings} from "../../../../constants/MyRatings";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export interface IGenericProjectCardProps extends CardProps {
    project: IProject
}
const CARD_WIDTH = 400

const GenericProjectCard = (props: IGenericProjectCardProps) => {
    const {project, ...cardProps} = props
    const theme = useTheme()
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery(smallScreen(theme))

    return (
        <Card {...cardProps} sx={{...cardProps.sx,
            width: CARD_WIDTH,
            transition: "transform 0.15s",
            cursor: "pointer",
            "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 10,
                transition: "transform 0.15s",

            }}}
              onClick={() => {navigate(PROJECTS_ROUTE+"/"+project.slug)}}>
            <Stack sx={{position: "relative", overflow: "hidden"}}>
                <Skeleton
                    style={{position: "absolute",
                    height: "180%", width: "100%", top: "-40%"}}/>
                <LazyLoadImage
                    src={project.imageSrc[0]}
                    height={CARD_WIDTH/2}
                    width={"100%"}
                    style={{
                        objectFit: "cover",
                    }}
                    effect={"blur"}
                    afterLoad={() => {console.log("loaded")}}
                    />
            </Stack>
            <Stack px={1} spacing={isSmallScreen ? 0.35 : 0.45}>
                <Typography variant={isSmallScreen ? "h6" : "h5"} pt={isSmallScreen ? 0.15 : 0.25}>
                    {project.title} <Chip label={project.status}  size={"small"} color={
                    project.status === "Deployed" ? "primary"
                        : project.status === "Completed" ? "success"
                            : project.status === "under-construction" ? "warning"
                                : project.status === "Abandoned" ? "error" : undefined}/>
                </Typography>
                <Grid justifyContent={"space-evenly"} alignItems={"center"} container spacing={isSmallScreen ? 0.25 : 0.35} py={isSmallScreen ? 0.25 : 0.35}>
                    {
                        project.tags.map(
                            (e) => (
                                MyCombinedRatings[e] ?
                                <Grid key={e} item>
                                    <SkillAndProjectTagChip tagName={e} size={"small"}/>
                                </Grid> : <Stack key={e} position={"absolute"}></Stack>
                            )
                        )
                    }
                </Grid>
                <Typography variant={"subtitle1"} pt={0.5} pb={1} px={1} textAlign={"center"}>
                    {project.shortDesc}
                </Typography>
            </Stack>

        </Card>
    );
};

export default GenericProjectCard;