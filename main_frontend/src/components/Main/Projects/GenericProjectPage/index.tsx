import React, {useState} from 'react';
import {
    Box,
    Chip,
    Grid,
    Modal,
    Paper,
    Stack,
    StackProps, Toolbar,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {IProject} from "../../../../constants/Projects";
import Carousel from "react-material-ui-carousel";
import {
    largeScreen,
    lowerMediumScreen,
    upperMediumScreen
} from "../../../../themes/constants";
import {SubTitleTypography, TitleTypography} from "../../style";
import SkillAndProjectTagChip from "../../../SkillAndProjectTagChip";

const MIN_IMAGE_HEIGHT = 300

export interface IGenericProjectPageProps extends StackProps {
    project: IProject
}
const GenericProjectPage = (props: IGenericProjectPageProps) => {
    const {project, ...stackProps} = props
    const theme = useTheme()
    const [selectedImage, setSelectedImage] = useState<undefined|string>(undefined)
    const isLowerMediumScreen = useMediaQuery(lowerMediumScreen(theme))
    const isUpperMediumScreen = useMediaQuery(upperMediumScreen(theme))
    const isLargeScreen = useMediaQuery(largeScreen(theme))
    const isSmallScreen = !isLargeScreen && !isLowerMediumScreen && !isUpperMediumScreen
    const vh = isLargeScreen ? "55vh" : isUpperMediumScreen ? "50vh" : isLowerMediumScreen ? "45vh" : "40vh"

    const openImageModal = (src: string) => {
        setSelectedImage(src)
    }
    const closeImageModal = () => {
        setSelectedImage(undefined)
    }

    return (
        <>
            <Toolbar/>
            <Stack {...stackProps}>
                <Carousel height={vh} indicators={false} autoPlay={true} sx={{minHeight: MIN_IMAGE_HEIGHT}}>
                    {project.imageSrc.map(
                        (e) => (
                            <Paper key={e} component={"img"} src={e}
                                   height={"100%"}
                                   width={"100%"}
                                   sx={{
                                       objectFit: "cover",
                                       borderTopRightRadius: 0,
                                       borderTopLeftRadius: 0,
                                       borderBottomRightRadius: '40px',
                                       borderBottomLeftRadius: '40px',
                                       cursor: "pointer",
                                       minHeight: MIN_IMAGE_HEIGHT
                                   }}
                                   onClick={() => {openImageModal(e)}}
                            />
                        )
                    )}
                </Carousel>
                <Modal open={selectedImage!==undefined} onClose={closeImageModal}>
                    <Stack sx={{
                        overflow: "scroll",
                        maxWidth: "95vw",
                        maxHeight: "90vh",
                        alignSelf: "center",
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        boxShadow: '0 8px 40px rgba(74, 124, 89, 0.2)',
                        bgcolor: "background.paper",
                        p: 0.5,
                        borderRadius: '40px',
                        '::-webkit-scrollbar': {
                            width: theme.spacing(1.5),
                            height: theme.spacing(1.5)
                        },
                        '::-webkit-scrollbar-track': {
                            background: 'rgba(74, 124, 89, 0.05)',
                            borderRadius: '12px'
                        },
                        '::-webkit-scrollbar-thumb': {
                            background: 'linear-gradient(180deg, #4a7c59 0%, #3d6b4f 100%)',
                            borderRadius: '12px'
                        }
                    }} >
                        <Paper sx={{objectFit: "scale-down",
                            minWidth: "800px"}}
                               height={"100%"} elevation={0}
                               component={"img"} src={selectedImage}
                        />
                    </Stack>

                </Modal>
                <Stack spacing={stackProps.spacing} px={isSmallScreen ? 1 : 2} py={2}>
                    <TitleTypography>
                        {project.title}
                    </TitleTypography>
                    <Box sx={{
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent 0%, rgba(74, 124, 89, 0.3) 50%, transparent 100%)',
                        borderRadius: '2px'
                    }} />
                    <SubTitleTypography sx={{ position: 'relative', pl: 2 }}>
                        <Box sx={{
                            position: 'absolute',
                            left: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '12px',
                            height: '12px',
                            background: theme.palette.primary.main,
                            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                        }} />
                        Tech Stack
                    </SubTitleTypography>
                    <Grid justifyContent={"space-evenly"} alignItems={"center"} container
                          spacing={0.5}>
                        {
                            project.tags.map(
                                (e) => (
                                    <Grid key={e} item>
                                        <SkillAndProjectTagChip tagName={e} key={e}/>
                                    </Grid>
                                )
                            )
                        }
                    </Grid>
                    <Box sx={{
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent 0%, rgba(74, 124, 89, 0.3) 50%, transparent 100%)',
                        borderRadius: '2px'
                    }} />
                    <SubTitleTypography>
                        Status: <Chip label={project.status} color={
                        project.status === "Deployed" ? "primary"
                            : project.status === "Completed" ? "success"
                                : project.status === "under-construction" ? "warning"
                                    : project.status === "Abandoned" ? "error" : undefined
                    } sx={{ borderRadius: '16px', ml: 1 }}/>
                    </SubTitleTypography>
                    <Box sx={{
                        height: '2px',
                        background: 'linear-gradient(90deg, transparent 0%, rgba(74, 124, 89, 0.3) 50%, transparent 100%)',
                        borderRadius: '2px'
                    }} />
                    <SubTitleTypography sx={{ position: 'relative', pl: 2 }}>
                        <Box sx={{
                            position: 'absolute',
                            left: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '12px',
                            height: '12px',
                            background: theme.palette.primary.main,
                            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                        }} />
                        Details
                    </SubTitleTypography>
                    {project.longDesc}
                </Stack>
            </Stack>
        </>
    );
};

export default GenericProjectPage;