import { Link } from "react-router-dom";
import React from "react";
import { StyledEditLink } from "../../styled";

export const projectColumns = [
    { id: 'id', label: 'Project ID', minWidth: 100 },
    { id: 'projectName', label: 'Project Name', minWidth: 200 },
    { id: 'startDate', label: 'Start Date', minWidth: 150 },
    { id: 'endDate', label: 'End Date', minWidth: 150 },
    { id: 'projectManager', label: 'Project Manager', minWidth: 200 },
    {
        id: 'edit',
        label: 'Actions',
        minWidth: 100,
        render: (row) => <StyledEditLink to={`project/edit/${row.id}`}>Edit</StyledEditLink>,
    },
];
