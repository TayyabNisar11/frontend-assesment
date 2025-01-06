import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProjectById, updateProject } from '../../api/project';
import { Box, TextField, Button, Typography, CircularProgress } from '@mui/material';

const EditProject = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        projectName: '',
        description: '',
        startDate: '',
        endDate: '',
        projectManager: '',
    });
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [error, setError] = useState(null);

    const getProjectData = async () => {
        setLoading(true);
        const response = await fetchProjectById(projectId);
        if (response.error) {
            setError(response.errorMessage);
        } else {
            setForm({
                projectName: response.data.projectName || '',
                description: response.data.description || '',
                startDate: response.data.startDate || '',
                endDate: response.data.endDate || '',
                projectManager: response.data.projectManager || '',
            });
        }
        setLoading(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleUpdate = async () => {
        setUpdating(true);
        const response = await updateProject(projectId, form);
        if (response.error) {
            alert(`Update failed: ${response.errorMessage}`);
        } else {
            alert('Project updated');
            navigate('/');
        }
        setUpdating(false);
    };

    useEffect(() => {
        getProjectData();
    }, [projectId]);

    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 2 }}>
            <Typography variant="h6" marginBottom={2}>
                Edit Project
            </Typography>
            <TextField
                fullWidth
                label="Project ID"
                value={projectId}
                disabled
                margin="normal"
                size='small'
            />
            <TextField
                fullWidth
                label="Project Name"
                name="projectName"
                value={form.projectName}
                onChange={handleChange}
                margin="normal"
                size='small'

            />
            <TextField
                fullWidth
                label="Description"
                name="description"
                value={form.description}
                onChange={handleChange}
                margin="normal"
                size='small'
                multiline
                rows={4}
            />
            <TextField
                fullWidth
                label="Start Date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                margin="normal"
                type="date"
                size='small'

            />
            <TextField
                fullWidth
                label="End Date"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                margin="normal"
                type="date"
                size='small'

            />
            <TextField
                fullWidth
                label="Project Manager"
                name="projectManager"
                value={form.projectManager}
                onChange={handleChange}
                margin="normal"
                size='small'

            />
            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleUpdate}
                disabled={updating}
                sx={{ marginTop: 2, position: 'relative' }}
            >
                {updating ? (
                    <>
                        <CircularProgress
                            size={24}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-12px',
                                marginLeft: '-12px',
                            }}
                        />
                        Updating...
                    </>
                ) : (
                    'Update'
                )}
            </Button>
        </Box>
    );
};

export default EditProject;
