// pages/auth/Register.jsx
import React, { useState } from 'react';
import { Box, Paper, TextField, Button, Typography, Alert, CircularProgress } from '@mui/material';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    // API call
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <Box sx={{ minHeight: '100vh', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 3 }}>
      <Paper elevation={24} sx={{ p: 5, minWidth: 420, borderRadius: 4 }}>
        <Typography variant="h4" fontWeight={700} color="primary.main" textAlign="center" gutterBottom>
          Create Account
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
          Join ProductManager today
        </Typography>

        {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField fullWidth label="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} sx={{ mb: 3 }} />
          <TextField fullWidth label="Email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} sx={{ mb: 3 }} />
          <TextField fullWidth label="Password" type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} sx={{ mb: 3 }} />
          <TextField fullWidth label="Confirm Password" type="password" value={formData.confirmPassword} onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} sx={{ mb: 3 }} />
          
          <Button fullWidth type="submit" variant="contained" disabled={loading} sx={{ py: 1.8, fontSize: '1.1rem' }}>
            {loading ? <CircularProgress size={24} /> : 'Create Account'}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Register;
