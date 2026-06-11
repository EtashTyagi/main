import React, {useMemo} from 'react';
import {Box, useTheme} from '@mui/material';

const FallingLeaves = () => {
    const theme = useTheme();
    
    const leafColor = theme.palette.mode === 'dark'
        ? 'rgba(74, 124, 89, 0.12)'
        : 'rgba(61, 107, 79, 0.10)';

    const leaves = useMemo(() => {
        return Array.from({length: 16}, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            size: 8 + Math.random() * 12,
            delay: Math.random() * 20,
            duration: 15 + Math.random() * 10,
            rotation: Math.random() * 360,
            drift: (Math.random() - 0.5) * 160
        }));
    }, []);

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                pointerEvents: 'none',
                zIndex: 9998,
            }}
        >
            {leaves.map((leaf) => (
                <Box
                    key={leaf.id}
                    sx={{
                        position: 'absolute',
                        left: `${leaf.left}%`,
                        top: '-20px',
                        width: `${leaf.size}px`,
                        height: `${leaf.size * 1.3}px`,
                        background: leafColor,
                        borderRadius: '0 80% 0 80%',
                        opacity: 0,
                        animation: `fallLeaf${leaf.id} ${leaf.duration}s linear infinite`,
                        animationDelay: `-${leaf.delay}s`,
                        [`@keyframes fallLeaf${leaf.id}`]: {
                            '0%': {
                                transform: `translateY(-20px) translateX(0) rotate(${leaf.rotation}deg)`,
                                opacity: 0
                            },
                            '10%': {
                                opacity: 1
                            },
                            '90%': {
                                opacity: 1
                            },
                            '100%': {
                                transform: `translateY(calc(100vh + 20px)) translateX(${leaf.drift}px) rotate(${leaf.rotation + 360}deg)`,
                                opacity: 0
                            }
                        }
                    }}
                />
            ))}
        </Box>
    );
};

export default FallingLeaves;
