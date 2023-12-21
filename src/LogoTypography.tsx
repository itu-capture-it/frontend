import React from 'react';
import { Box, Typography } from '@mui/material';
import Logo from './assets/capture-it-logo.png';

interface LogoTypographyProps {
    imgStyle: React.CSSProperties;
}

const LogoTypography: React.FC<LogoTypographyProps> = ({ imgStyle }) => (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img src={Logo} alt="Capture It Logo" style={imgStyle} />
        <Typography variant="h6" component="div">
            CaptureIT
        </Typography>
    </Box>
);

export default LogoTypography;
