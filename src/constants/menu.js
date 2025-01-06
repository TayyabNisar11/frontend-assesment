import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import React from 'react'

export const menuItems = [
    {
        title: 'Home',
        path: '/',
        icon: <HomeIcon />,
    },
    {
        title: 'Projects',
        icon: <FolderIcon />,
        subItems: [
            { title: 'Project A', path: '/projects/a' },
            { title: 'Project B', path: '/projects/b' },
        ],
    },

];
