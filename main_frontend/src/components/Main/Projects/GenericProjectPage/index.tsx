import React, {useState} from 'react';
import {
    Chip,
    Divider, Grid,
    Modal,
    Paper,
    Stack,
    StackProps,
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
                                       borderBottomRightRadius: 8,
                                       borderBottomLeftRadius: 8,
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
                        boxShadow: 24,
                        bgcolor: "background.paper",
                        p: 0.5,
                        borderRadius: 1,
                        '::-webkit-scrollbar': {
                            width: theme.spacing(1),
                            height: theme.spacing(1)
                        },
                        '::-webkit-scrollbar-track': {
                            webkitBoxShadow: 'inset 0 0 4px rgba(0,0,0,0.2)'
                        },
                        '::-webkit-scrollbar-thumb': {
                            backgroundColor: theme.palette.error.dark,
                            borderRadius: theme.spacing(1),
                            ':active': {
                                backgroundColor: theme.palette.error.main
                            }
                        }
                    }} >
                        <Paper sx={{objectFit: "scale-down",
                        minWidth: "800px"}}
                               height={"100%"} elevation={0}
                            component={"img"} src={selectedImage}
                        />
                    </Stack>

                </Modal>
                <Stack spacing={stackProps.spacing} px={isSmallScreen ? 1 : 2}>
                    <TitleTypography>
                        {project.title}
                    </TitleTypography>
                    <Divider/>
                    <SubTitleTypography>
                        Tech Stack
                    </SubTitleTypography>
                    <Grid justifyContent={"space-evenly"} alignItems={"center"} container
                          spacing={0.5}>
                        {
                            project.tags.map(
                                (e) => (
                                    <Grid item>
                                        <SkillAndProjectTagChip tagName={e} key={e}/>
                                    </Grid>
                                )
                            )
                        }
                    </Grid>
                    <Divider/>
                    <SubTitleTypography>
                        Status: <Chip label={project.status} color={
                        project.status === "Deployed" ? "primary"
                            : project.status === "Completed" ? "success"
                                : project.status === "under-construction" ? "warning"
                                    : project.status === "Abandoned" ? "error" : undefined
                    }/>
                    </SubTitleTypography>
                    <Divider/>
                    <SubTitleTypography>
                        Details
                    </SubTitleTypography>
                    {project.longDesc}
                </Stack>
            </Stack>

    );
};

export default GenericProjectPage;