import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const Loading = ({ message = "Loading..." }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '200px',
      gap: 2
    }}>
      <CircularProgress size={60} sx={{ color: '#2563eb' }} />
      <Typography variant="h6" color="text.secondary">
        {message}
      </Typography>
    </Box>
  );
};

export default Loading;
