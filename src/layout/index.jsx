import React, { useState } from 'react';
import { Box, CssBaseline, Toolbar, Typography } from '@mui/material';
import AppBar from './appbar';
import SideBar from './sidebar';

const Layout = ({ children }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar onMenuToggle={handleDrawerToggle} />
            <SideBar
                mobileOpen={mobileOpen}
                onMenuToggle={handleDrawerClose}
                onTransitionEnd={handleDrawerTransitionEnd}
            />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - 240px)` },
                }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
