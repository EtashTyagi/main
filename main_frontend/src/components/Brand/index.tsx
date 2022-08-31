import React from 'react';
import {Box, BoxProps, Typography} from "@mui/material";

const Brand = (props: BoxProps) => {
    return (
        <Box {...props}>
            <Typography
                variant="h4"
                noWrap
                component="div"
                fontFamily={"ariel"}
            >
                Etash Tyagi
            </Typography>
        </Box>

    );
};

export default Brand;