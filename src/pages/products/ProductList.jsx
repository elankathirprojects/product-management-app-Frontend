// pages/products/ProductsList.jsx
import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Chip, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Add, Search, FilterList } from '@mui/icons-material';
import { DataGrid, gridClasses } from '@mui/x-data-grid';

const ProductsList = () => {
  const [rows, setRows] = useState([]);
  const [pagination, setPagination] = useState({ page: 0, pageSize: 10 });
  const [filters, setFilters] = useState({ search: '', type: '' });

  // Mock data
  useEffect(() => {
    const mockData = Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      name: `Product Name ${i + 1}`,
      type: ['Electronics', 'Clothing', 'Food & Beverages', 'Home & Garden', 'Books'][i % 5],
      specs: i % 3 === 0 ? ['Fragile', 'Warranty'] : ['Perishable', 'Eco-Friendly'],
      hsn: `123456${String(i + 1).padStart(2, '0')}`,
      expiryDate: new Date(Date.now() + (i * 86400000)),
      quantity: Math.floor(Math.random() * 100),
      weight: { value: (Math.random() * 50).toFixed(1), unit: 'kg' },
      price: (Math.random() * 5000 + 100).toFixed(2)
    }));
    setRows(mockData);
  }, []);

  const columns = [
    { field: 'name', headerName: 'Product Name', flex: 1.5, sortable: true },
    { field: 'type', headerName: 'Type', flex: 1, sortable: true },
    {
      field: 'specs',
      headerName: 'Specs',
      flex: 1.2,
      renderCell: ({ value }) => (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {value.map((spec, i) => (
            <Chip key={i} label={spec} size="small" variant="outlined" />
          ))}
        </Box>
      )
    },
    { field: 'hsn', headerName: 'HSN Number', flex: 1, sortable: true },
    { field: 'expiryDate', headerName: 'Expiry Date', flex: 1, type: 'date', sortable: true },
    { field: 'quantity', headerName: 'Quantity', flex: 0.8, sortable: true },
    {
      field: 'weight',
      headerName: 'Weight',
      flex: 1,
      valueFormatter: ({ value }) => `${value.value} ${value.unit}`
    },
    {
      field: 'price',
      headerName: 'Price',
      flex: 1,
      sortable: true,
      valueFormatter: ({ value }) => `₹${parseFloat(value).toFixed(2)}`
    },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1.5,
      sortable: false,
      renderCell: ({ row }) => (
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button size="small" variant="outlined">View</Button>
          <Button size="small" color="primary">Edit</Button>
          <Button size="small" color="error">Delete</Button>
        </Box>
      )
    }
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h3" fontWeight={700} sx={{ color: '#1e293b' }}>
          Products
        </Typography>
        <Button variant="contained" startIcon={<Add />} href="/products/add">
          Add Product
        </Button>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        <TextField
          size="small"
          placeholder="Search products..."
          sx={{ minWidth: 200 }}
          startIcon={<Search />}
        />
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Filter Type</InputLabel>
          <Select label="Filter Type">
            <MenuItem value="">All Types</MenuItem>
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Clothing">Clothing</MenuItem>
          </Select>
        </FormControl>
        <Button startIcon={<FilterList />} variant="outlined" size="small">
          Filters
        </Button>
      </Box>

      <Box sx={{ height: 650, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          paginationModel={pagination}
          onPaginationModelChange={setPagination}
          rowCount={1000}
          paginationMode="server"
          sx={{
            borderRadius: 3,
            [`& .${gridClasses.row}`]: { borderRadius: 1 },
            [`& .${gridClasses.columnHeaders}`]: {
              backgroundColor: '#2563eb',
              color: 'white',
              fontWeight: 600
            }
          }}
        />
      </Box>
    </Box>
  );
};

export default ProductsList;
