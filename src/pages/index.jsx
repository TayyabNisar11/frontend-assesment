import { Button, Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchAllProjects } from '../api/project';
import TableComponent from '../components/table';
import { projectColumns } from '../constants/columns/project';
import { Link } from 'react-router-dom';

const MainPage = () => {
    const [projectsData, setProjectsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getProjects = async () => {
        const response = await fetchAllProjects();
        if (response.error) {
            setError(response.errorMessage);
        } else {
            setProjectsData(response.data);
        }
        setLoading(false);
    };

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <Box>
            {loading && <Typography variant="h5">Loading...</Typography>}
            {error && <Typography variant="h5" color="error">{error}</Typography>}
            <Box>
                {Array.isArray(projectsData) && projectsData.length > 0 ? <TableComponent columns={projectColumns} rows={projectsData} /> :
                    <Typography variant='h6'>No Data</Typography>}
            </Box>
        </Box>
    )
}

export default MainPage