import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { StyledTableCell, StyledTableRow } from '../styled';

const TableComponent = ({ columns, rows }) => {
    return <TableContainer component={Paper}>
        <Table stickyHeader>
            <TableHead>
                <StyledTableRow>
                    {columns.map((column) => (
                        <StyledTableCell
                            key={column.id}
                            align={column.align || 'left'}
                            style={{ minWidth: column.minWidth }}
                        >
                            {column.label}
                        </StyledTableCell>
                    ))}
                </StyledTableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, rowIndex) => (
                    <StyledTableRow hover key={rowIndex}>
                        {columns.map((column) => {
                            const value = row[column.id];
                            return (
                                <StyledTableCell key={column.id} align={column.align || 'left'}>
                                    {column.render ? column.render(row) : column.format && typeof value === 'number'
                                        ? column.format(value)
                                        : value}
                                </StyledTableCell>
                            );
                        })}
                    </StyledTableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
};

export default TableComponent;
