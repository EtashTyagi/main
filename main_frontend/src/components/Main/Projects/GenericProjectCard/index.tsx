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
            borderRadius: '24px 24px 60px 24px',
            boxShadow: '0 4px 20px rgba(74, 124, 89, 0.1)',
            transition: "all 0.4s ease-in-out",
            cursor: "pointer",
            "&:hover": {
                transform: "rotate(1deg) translateY(-4px)",
                boxShadow: "0 12px 40px rgba(74, 124, 89, 0.18)",
            }}}
              onClick={() => {navigate(PROJECTS_ROUTE+"/"+project.slug)}}>
            <Stack sx={{...cardProps, position: "relative", overflow: "hidden", borderRadius: '24px 24px 0 0'}}>
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
            <Stack px={2} spacing={isSmallScreen ? 0.35 : 0.45}>
                <Typography variant={isSmallScreen ? "h6" : "h5"} pt={isSmallScreen ? 0.5 : 0.75} fontFamily="'Lora', Georgia, serif">
                    {project.title} <Chip label={project.status}  size={"small"} color={
                    project.status === "Deployed" ? "primary"
                        : project.status === "Completed" ? "success"
                            : project.status === "under-construction" ? "warning"
                                : project.status === "Abandoned" ? "error" : undefined} sx={{ borderRadius: '16px' }}/>
                </Typography>
                <Grid justifyContent={"space-evenly"} alignItems={"center"} container spacing={isSmallScreen ? 0.25 : 0.35} py={isSmallScreen ? 0.25 : 0.35}>
                    {
                        [...project.tags].sort((a, b) => (MyCombinedRatings[b] || 0) - (MyCombinedRatings[a] || 0)).map(
                            (e) => (
                                MyCombinedRatings[e] ?
                                <Grid key={e} item>
                                    <SkillAndProjectTagChip tagName={e} size={"small"}/>
                                </Grid> : <Stack key={e} position={"absolute"}></Stack>
                            )
                        )
                    }
                </Grid>
                <Typography variant={"subtitle1"} pt={0.5} pb={1.5} px={1} textAlign={"center"}>
                    {project.shortDesc}
                </Typography>
            </Stack>

        </Card>
    );
};

export default GenericProjectCard;