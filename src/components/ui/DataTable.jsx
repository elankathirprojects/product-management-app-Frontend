import React from 'react';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const DataTable = ({ 
  rows, 
  columns, 
  loading = false, 
  paginationModel, 
  onPaginationModelChange, 
  rowCount,
  pageSizeOptions = [10, 25, 50],
  sx = {}
}) => {
  return (
    <Box sx={{ height: 650, width: '100%', ...sx }}>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        paginationMode="server"
        paginationModel={paginationModel}
        onPaginationModelChange={onPaginationModelChange}
        rowCount={rowCount}
        pageSizeOptions={pageSizeOptions}
        disableRowSelectionOnClick
        sx={{
          borderRadius: 3,
          [`& .${gridClasses.row}`]: { 
            borderRadius: 1,
            '&:hover': { backgroundColor: 'rgba(37, 99, 235, 0.04)' }
          },
          [`& .${gridClasses.columnHeaders}`]: {
            backgroundColor: '#2563eb',
            color: 'white',
            fontWeight: 600
          },
          ...sx
        }}
      />
    </Box>
  );
};

export default DataTable;
