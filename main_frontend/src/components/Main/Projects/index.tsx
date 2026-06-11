import React from 'react';
import {Box, Chip, Grid, Stack, Toolbar, Typography, useMediaQuery, useTheme} from "@mui/material";
import {StyledFullScreenWrapper} from "../style";
import {Route, Routes, useSearchParams} from "react-router-dom";
import projectDetails from "../../../constants/Projects";
import GenericProjectPage from "./GenericProjectPage";
import {smallScreen} from "../../../themes/constants";
import GenericProjectCard from "./GenericProjectCard";
import {Close} from "@mui/icons-material";
import {PROJECTS_ROUTE} from "../../../constants/routes";
import {useNavigate} from "react-router-dom";

const Projects = () => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(smallScreen(theme))
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const tagFilter = searchParams.get("tag")

    const filteredProjects = tagFilter
        ? projectDetails.filter(p => p.tags.some(t => t.toLowerCase() === tagFilter.toLowerCase()))
        : projectDetails

    const pageTitle = tagFilter
        ? `${tagFilter} Projects`
        : "Projects"

    return (
        <Routes>
            <Route path={"/"} element={
                <>
                    <Toolbar/>
                    <StyledFullScreenWrapper spacing={2} sx={{ position: 'relative' }}>
                        <Box sx={{
                            position: 'absolute',
                            top: '5%',
                            left: '-5%',
                            width: '250px',
                            height: '250px',
                            opacity: 0.04,
                            background: theme.palette.primary.main,
                            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                            zIndex: 0
                        }} />
                        <Stack direction="row" alignItems="center" spacing={2} sx={{ zIndex: 1 }}>
                            <Typography variant={isSmallScreen ? "h4" : "h3"} fontFamily="'Lora', Georgia, serif">
                                {pageTitle}
                            </Typography>
                            {tagFilter && (
                                <Chip
                                    label={tagFilter}
                                    onDelete={() => navigate(PROJECTS_ROUTE)}
                                    deleteIcon={<Close />}
                                    color="primary"
                                    variant="outlined"
                                />
                            )}
                        </Stack>
                        {filteredProjects.length > 0 ? (
                            <Grid spacing={3} container justifyContent={"space-evenly"} alignItems={"center"} pr={4} sx={{ zIndex: 1 }}>
                                {
                                    filteredProjects.map(
                                        (e) => (
                                            <Grid key={e.title} item>
                                                <GenericProjectCard project={e}
                                                                    elevation={0}
                                                                    sx={{
                                                                        maxWidth: `calc(100vw - ${theme.spacing(4)})`
                                                                    }}
                                                />
                                            </Grid>
                                        )
                                    )
                                }
                            </Grid>
                        ) : (
                            <Typography variant="h6" color="text.secondary" sx={{ zIndex: 1 }}>
                                No projects found for "{tagFilter}".
                            </Typography>
                        )}

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