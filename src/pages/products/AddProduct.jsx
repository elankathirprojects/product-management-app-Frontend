// pages/products/AddProduct.jsx
import React, { useState } from 'react';
import { Box, Paper, Typography, TextField, Select, MenuItem, Chip, Button, FormControl, InputLabel, FormControlLabel, Checkbox, DatePicker } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    specs: [],
    hsn: '',
    expiryDate: null,
    quantity: '',
    weight: { value: '', unit: 'kg' },
    price: '',
    image: null
  });
  const [selectedSpecs, setSelectedSpecs] = useState([]);

  const productTypes = ['Electronics', 'Clothing', 'Food & Beverages', 'Home & Garden', 'Books'];
  const specsList = ['Fragile', 'Perishable', 'Heavy', 'Eco-Friendly', 'Returnable', 'Warranty'];
  const weightUnits = ['kg', 'g', 'lb', 'oz'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product Data:', formData);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Button href="/products" startIcon={<ArrowBack />}>Back to Products</Button>
      
      <Paper sx={{ p: 5, mt: 3, maxWidth: 800, mx: 'auto' }}>
        <Typography variant="h4" fontWeight={700} sx={{ mb: 4, color: '#1e293b' }}>
          Add New Product
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 3 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
            <TextField label="Product Name *" fullWidth required />
            <FormControl fullWidth required>
              <InputLabel>Product Type</InputLabel>
              <Select value={formData.type} label="Product Type" onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                {productTypes.map(type => <MenuItem key={type} value={type}>{type}</MenuItem>)}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            {selectedSpecs.map(spec => (
              <Chip key={spec} label={spec} onDelete={() => setSelectedSpecs(selectedSpecs.filter(s => s !== spec))} />
            ))}
          </Box>
          
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2 }}>
            {specsList.map(spec => (
              <FormControlLabel
                key={spec}
                control={<Checkbox />}
                label={spec}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedSpecs([...selectedSpecs, spec]);
                  } else {
                    setSelectedSpecs(selectedSpecs.filter(s => s !== spec));
                  }
                }}
              />
            ))}
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 3 }}>
            <TextField label="HSN Number *" fullWidth required />
            <TextField label="Quantity *" type="number" inputProps={{ min: 0 }} fullWidth required />
            <TextField label="Price *" type="number" inputProps={{ step: 0.01, min: 0 }} fullWidth required />
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 3 }}>
            <TextField label="Weight *" type="number" inputProps={{ step: 0.01, min: 0 }} />
            <FormControl>
              <InputLabel>Unit</InputLabel>
              <Select label="Unit">
                {weightUnits.map(unit => <MenuItem key={unit} value={unit}>{unit}</MenuItem>)}
              </Select>
            </FormControl>
          </Box>

          <DateTimePicker label="Expiry Date (Optional)" sx={{ minWidth: 300 }} />

          <Button type="submit" variant="contained" size="large" sx={{ py: 2, fontSize: '1.1rem' }}>
            Create Product
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AddProduct;
