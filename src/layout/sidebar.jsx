import React, { useState } from 'react';
import {
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
    Toolbar,
    Box,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { menuItems } from '../constants/menu';

const drawerWidth = 240;

const SideBar = ({ mobileOpen, onMenuToggle, container }) => {
    const [openSubMenu, setOpenSubMenu] = useState({});

    const handleToggleSubMenu = (index) => {
        setOpenSubMenu((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const drawerContent = (
        <div>
            <Toolbar />
            <List>
                {menuItems.map((item, index) => (
                    <React.Fragment key={index}>
                        {item.subItems ? (
                            <>
                                <ListItemButton onClick={() => handleToggleSubMenu(index)}>
                                    {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                                    <ListItemText primary={item.title} />
                                    {openSubMenu[index] ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={openSubMenu[index]} timeout="auto" unmountOnExit>
                                    <List component="div"  disablePadding>
                                        {item.subItems.map((subItem, subIndex) => (
                                            <ListItemButton
                                                key={subIndex}
                                                component={Link}
                                                to={subItem.path}
                                                onClick={onMenuToggle}
                                                sx={{ pl: 12 }}
                                            >
                                                <ListItemText primary={subItem.title} />
                                            </ListItemButton>
                                        ))}
                                    </List>
                                </Collapse>
                            </>
                        ) : (
                            <ListItemButton component={Link} to={item.path} onClick={onMenuToggle}>
                                {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        )}
                    </React.Fragment>
                ))}
            </List>
        </div>
    );

    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={onMenuToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawerContent}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawerContent}
            </Drawer>
        </Box>
    );
};

export default SideBar;
