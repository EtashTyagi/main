import React, {useEffect, useRef} from 'react';
import {Box, useTheme} from '@mui/material';

const CursorGradient = () => {
    const theme = useTheme();
    const gradientRef = useRef<HTMLDivElement>(null);
    const positionRef = useRef({x: 0, y: 0});
    const targetRef = useRef({x: 0, y: 0});
    const lastMousePos = useRef({x: 0, y: 0});
    const lastMoveTime = useRef(Date.now());

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            lastMousePos.current = {x: e.clientX, y: e.clientY};
            targetRef.current = {x: e.clientX, y: e.clientY};
            lastMoveTime.current = Date.now();
        };

        const animate = () => {
            const now = Date.now();
            const timeSinceMove = now - lastMoveTime.current;
            
            if (timeSinceMove > 100) {
                const time = now * 0.001;
                const radius = 40;
                targetRef.current = {
                    x: lastMousePos.current.x + Math.sin(time) * radius,
                    y: lastMousePos.current.y + Math.cos(time * 0.7) * radius
                };
            }

            positionRef.current = {
                x: positionRef.current.x + (targetRef.current.x - positionRef.current.x) * 0.08,
                y: positionRef.current.y + (targetRef.current.y - positionRef.current.y) * 0.08
            };

            if (gradientRef.current) {
                gradientRef.current.style.setProperty('--x', `${positionRef.current.x}px`);
                gradientRef.current.style.setProperty('--y', `${positionRef.current.y}px`);
            }

            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    const gradientColor = theme.palette.mode === 'dark'
        ? 'radial-gradient(circle, rgba(74, 124, 89, 0.18) 0%, rgba(74, 124, 89, 0.12) 20%, rgba(74, 124, 89, 0.06) 45%, rgba(74, 124, 89, 0.02) 70%, transparent 100%)'
        : 'radial-gradient(circle, rgba(61, 107, 79, 0.28) 0%, rgba(61, 107, 79, 0.17) 20%, rgba(61, 107, 79, 0.09) 45%, rgba(61, 107, 79, 0.03) 70%, transparent 100%)';

    return (
        <Box
            ref={gradientRef}
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 9999,
                '--x': '0px',
                '--y': '0px',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    left: 'var(--x)',
                    top: 'var(--y)',
                    width: '500px',
                    height: '500px',
                    transform: 'translate(-50%, -50%)',
                    background: gradientColor,
                    filter: 'blur(50px)',
                    pointerEvents: 'none',
                }}
            />
        </Box>
    );
};

export default CursorGradient;
