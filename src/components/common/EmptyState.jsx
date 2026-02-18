import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { SearchOff } from '@mui/icons-material';

const EmptyState = ({ 
  title = "No Data Found", 
  message = "No products match your search criteria", 
  action 
}) => {
  return (
    <Box sx={{ 
      textAlign: 'center', 
      py: 8, 
      maxWidth: 400, 
      mx: 'auto' 
    }}>
      <SearchOff sx={{ fontSize: 64, color: '#cbd5e1', mb: 3 }} />
      <Typography variant="h5" fontWeight={600} sx={{ mb: 2, color: '#1e293b' }}>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        {message}
      </Typography>
      {action && (
        <Button variant="contained" size="large" onClick={action}>
          {action.label}
        </Button>
      )}
    </Box>
  );
};

export default EmptyState;
