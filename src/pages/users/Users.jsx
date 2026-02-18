import React from 'react';
import { Box, Typography, Paper,Chip,Button } from '@mui/material';
import DataTable from '../../components/ui/DataTable';
import Loading from '../../components/common/Loading';

const Users = () => {
  const columns = [
    { field: 'name', headerName: 'Name', flex: 1.2 },
    { field: 'email', headerName: 'Email', flex: 1.8 },
    { field: 'role', headerName: 'Role', flex: 0.8, renderCell: ({ value }) => (
      <Chip label={value} color={value === 'Admin' ? 'primary' : 'default'} size="small" />
    )},
    { field: 'createdAt', headerName: 'Joined', flex: 1, type: 'date' },
    { field: 'status', headerName: 'Status', flex: 0.8, renderCell: ({ value }) => (
      <Chip label={value} color={value === 'Active' ? 'success' : 'error'} size="small" />
    )},
    { 
      field: 'actions', 
      headerName: 'Actions', 
      flex: 1.2,
      renderCell: () => (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button size="small" variant="outlined">View</Button>
          <Button size="small" color="primary">Edit</Button>
        </Box>
      )
    }
  ];

  const rows = [
    { id: 1, name: 'John Doe', email: 'john@company.com', role: 'Admin', createdAt: '2026-01-15', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@company.com', role: 'User', createdAt: '2026-02-01', status: 'Active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@company.com', role: 'User', createdAt: '2026-01-20', status: 'Inactive' }
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h3" fontWeight={700} sx={{ color: '#1e293b' }}>
          User Management
        </Typography>
        <Button variant="contained">Add User</Button>
      </Box>
      
      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <DataTable
          rows={rows}
          columns={columns}
          rowCount={100}
          paginationModel={{ page: 0, pageSize: 10 }}
        />
      </Paper>
    </Box>
  );
};

export default Users;
