import React from 'react';
import {Divider, Grid, Toolbar, Typography, useMediaQuery, useTheme} from "@mui/material";
import {StyledFullScreenWrapper} from "../style";
import {Route, Routes} from "react-router-dom";
import projectDetails from "../../../constants/Projects";
import GenericProjectPage from "./GenericProjectPage";
import {smallScreen} from "../../../themes/constants";
import GenericProjectCard from "./GenericProjectCard";

const Projects = () => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(smallScreen(theme))

    return (
        <Routes>
            <Route path={"/"} element={
                <>
                    <Toolbar/>
                    <StyledFullScreenWrapper spacing={2}>
                        <Typography variant={isSmallScreen ? "h4" : "h3"}>
                            Projects
                        </Typography>
                        {/*<Filter/>*/}
                        <Divider/>
                        <Grid spacing={2} container justifyContent={"space-evenly"} alignItems={"center"} pr={4}>
                            {
                                projectDetails.map(
                                    (e) => (
                                        <Grid key={e.title} item>
                                            <GenericProjectCard project={e}
                                                                elevation={4}
                                                                sx={{
                                                                    borderRadius: 2,
                                                                    maxWidth: `calc(100vw - ${theme.spacing(4)})`
                                                                }}
                                            />
                                        </Grid>
                                    )
                                )
                            }
                        </Grid>

                    </StyledFullScreenWrapper>
                </>
            }
            />
            {
                projectDetails.map(
                    (e) => (
                        <Route path={e.slug}
                               element={<GenericProjectPage project={e} spacing={2}/>}
                               key={e.slug}
                        />
                    )
                )
            }
        </Routes>
    );
};

export default Projects;