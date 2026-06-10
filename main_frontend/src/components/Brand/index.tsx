import React from 'react';
import {Box, BoxProps, Typography} from "@mui/material";

const Brand = (props: BoxProps) => {
    return (
        <Box {...props}>
            <Typography
                variant="h4"
                noWrap
                component="div"
                fontFamily={"'Lora', Georgia, serif"}
                fontWeight={600}
                sx={{
                    background: 'linear-gradient(135deg, #4a7c59 0%, #c8a96e 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '0.5px'
                }}
            >
                Etash Tyagi
            </Typography>
        </Box>

    );
};

export default Brand;