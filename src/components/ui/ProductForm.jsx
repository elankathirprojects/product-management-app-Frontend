import React, { useState } from 'react';
import {
  Box, TextField, Select, MenuItem, Chip, FormControl,
  InputLabel, Button, FormControlLabel, Checkbox, Grid,Typography
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { PRODUCT_TYPES, PRODUCT_SPECS, WEIGHT_UNITS } from '../../utils/constants';

const ProductForm = ({ 
  initialData = {}, 
  onSubmit, 
  onCancel, 
  loading = false,
  title = "Add Product"
}) => {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    type: initialData.type || '',
    specs: initialData.specs || [],
    hsn: initialData.hsn || '',
    expiryDate: initialData.expiryDate || '',
    quantity: initialData.quantity || '',
    weight: initialData.weight || { value: '', unit: 'kg' },
    price: initialData.price || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const toggleSpec = (spec) => {
    const newSpecs = formData.specs.includes(spec)
      ? formData.specs.filter(s => s !== spec)
      : [...formData.specs, spec];
    setFormData({ ...formData, specs: newSpecs });
  };

  return (
    <Box>
      <Button href="/products" startIcon={<ArrowBack />}>Back to Products</Button>
      
      <Box sx={{ p: 5, maxWidth: 800, mx: 'auto', mt: 4 }}>
        <Typography variant="h4" fontWeight={700} sx={{ mb: 4, color: '#1e293b' }}>
          {title}
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Product Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel>Product Type</InputLabel>
                <Select
                  value={formData.type}
                  label="Product Type"
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                >
                  {PRODUCT_TYPES.map(type => (
                    <MenuItem key={type} value={type}>{type}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Product Specs</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              {formData.specs.map(spec => (
                <Chip
                  key={spec}
                  label={spec}
                  onDelete={() => toggleSpec(spec)}
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {PRODUCT_SPECS.map(spec => (
                <FormControlLabel
                  key={spec}
                  control={
                    <Checkbox
                      checked={formData.specs.includes(spec)}
                      onChange={() => toggleSpec(spec)}
                    />
                  }
                  label={spec}
                />
              ))}
            </Box>
          </Box>

          <Grid container spacing={3} sx={{ mt: 3 }}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="HSN Number *"
                value={formData.hsn}
                onChange={(e) => setFormData({ ...formData, hsn: e.target.value })}
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Quantity *"
                type="number"
                inputProps={{ min: 0 }}
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Price *"
                type="number"
                inputProps={{ step: 0.01, min: 0 }}
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                required
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ mt: 3 }}>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                label="Weight *"
                type="number"
                inputProps={{ step: 0.01, min: 0 }}
                value={formData.weight.value}
                onChange={(e) => setFormData({
                  ...formData,
                  weight: { ...formData.weight, value: e.target.value }
                })}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Unit</InputLabel>
                <Select
                  value={formData.weight.unit}
                  label="Unit"
                  onChange={(e) => setFormData({
                    ...formData,
                    weight: { ...formData.weight, unit: e.target.value }
                  })}
                >
                  {WEIGHT_UNITS.map(unit => (
                    <MenuItem key={unit} value={unit}>{unit}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
            <Button variant="outlined" onClick={onCancel} disabled={loading}>
              Cancel
            </Button>
            <Button
              variant="contained"
              type="submit"
              size="large"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Product'}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductForm;
