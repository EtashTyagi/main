import React from "react";
import {Box, useTheme} from "@mui/material";

const ParticlesContainer = () => {
    const theme = useTheme()

    return (
        <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
            '&::before, &::after': {
                content: '""',
                position: 'absolute',
                borderRadius: '50%',
                opacity: 0.15,
                animation: 'float 20s ease-in-out infinite'
            },
            '&::before': {
                width: '300px',
                height: '300px',
                background: `radial-gradient(circle, ${theme.palette.primary.main} 0%, transparent 70%)`,
                top: '20%',
                left: '10%',
                animationDelay: '0s'
            },
            '&::after': {
                width: '400px',
                height: '400px',
                background: `radial-gradient(circle, ${theme.palette.secondary.main} 0%, transparent 70%)`,
                bottom: '10%',
                right: '15%',
                animationDelay: '-10s'
            },
            '@keyframes float': {
                '0%, 100%': {
                    transform: 'translate(0, 0) scale(1)'
                },
                '33%': {
                    transform: 'translate(30px, -30px) scale(1.1)'
                },
                '66%': {
                    transform: 'translate(-20px, 20px) scale(0.9)'
                }
            }
        }}>
            <Box sx={{
                position: 'absolute',
                width: '250px',
                height: '250px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${theme.palette.error.main} 0%, transparent 70%)`,
                opacity: 0.1,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                animation: 'float 25s ease-in-out infinite',
                animationDelay: '-5s'
            }} />
        </Box>
    );
};

export default ParticlesContainer;