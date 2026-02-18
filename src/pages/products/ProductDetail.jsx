import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Box, Paper, Typography, Chip, Grid, Divider, Button, 
  Card, CardMedia, CardContent, Stack 
} from '@mui/material';
import { ArrowBack, Edit, Delete } from '@mui/icons-material';
import { PRODUCT_SPECS } from '../../utils/constants';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Mock product data
  const product = {
    id: parseInt(id),
    name: `Premium Wireless Headphones ${id}`,
    type: 'Electronics',
    specs: ['Fragile', 'Warranty', 'Eco-Friendly'],
    hsn: '85183000',
    expiryDate: '2027-12-31',
    quantity: 45,
    weight: { value: 0.3, unit: 'kg' },
    price: 2499.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400'
  };

  const handleEdit = () => navigate(`/products/${id}/edit`);
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      console.log('Deleting product:', id);
      navigate('/products');
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Button 
        startIcon={<ArrowBack />} 
        onClick={() => navigate('/products')}
        sx={{ mb: 4 }}
      >
        Back to Products
      </Button>

      <Paper sx={{ p: 6, maxWidth: 1000, mx: 'auto' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 4 }}>
          <Box>
            <Typography variant="h3" fontWeight={700} sx={{ color: '#1e293b', mb: 1 }}>
              {product.name}
            </Typography>
            <Typography variant="h6" color="primary.main">
              {product.type}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button 
              variant="contained" 
              startIcon={<Edit />}
              onClick={handleEdit}
            >
              Edit
            </Button>
            <Button 
              variant="outlined" 
              color="error"
              startIcon={<Delete />}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Box>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="300"
                image={product.image}
                alt={product.name}
              />
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Paper sx={{ p: 3, height: '100%' }}>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                    HSN Number
                  </Typography>
                  <Typography variant="h6" fontWeight={600}>
                    {product.hsn}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper sx={{ p: 3, height: '100%' }}>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                    Quantity
                  </Typography>
                  <Typography variant="h6" fontWeight={600}>
                    {product.quantity} units
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper sx={{ p: 3, height: '100%' }}>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                    Weight
                  </Typography>
                  <Typography variant="h6" fontWeight={600}>
                    {product.weight.value} {product.weight.unit}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper sx={{ p: 3, height: '100%' }}>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                    Price
                  </Typography>
                  <Typography variant="h4" fontWeight={700} color="primary.main">
                    ₹{product.price.toLocaleString()}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            <Divider sx={{ my: 4 }} />

            <Box>
              <Typography variant="h6" sx={{ mb: 2 }}>Product Specifications</Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {product.specs.map((spec, index) => (
                  <Chip key={index} label={spec} color="primary" variant="outlined" />
                ))}
              </Stack>
            </Box>

            {product.expiryDate && (
              <>
                <Divider sx={{ my: 4 }} />
                <Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>Expiry Date</Typography>
                  <Typography variant="body1" color="text.secondary">
                    {new Date(product.expiryDate).toLocaleDateString()}
                  </Typography>
                </Box>
              </>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ProductDetail;
