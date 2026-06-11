import {Box, styled} from "@mui/material";

export const MarkdownContainer = styled(Box)(({theme}) => ({
    '& ul': {
        margin: 0,
        paddingLeft: theme.spacing(3),
        '& li': {
            marginBottom: theme.spacing(1),
            lineHeight: 1.6,
            '&:last-child': {
                marginBottom: 0,
            },
        },
    },
    '& a': {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    '& p': {
        margin: 0,
        marginBottom: theme.spacing(1),
        lineHeight: 1.6,
        '&:last-child': {
            marginBottom: 0,
        },
    },
}));
