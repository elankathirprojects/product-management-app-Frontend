import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { Notifications, AccountCircle } from '@mui/icons-material';

const Header = ({ onToggleSidebar }) => {
  return (
    <AppBar position="fixed" sx={{ zIndex: 1201, background: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton onClick={onToggleSidebar} sx={{ color: '#2563eb' }}>
          <Box sx={{ fontSize: 24 }}>☰</Box>
        </IconButton>
        
        <Typography variant="h6" sx={{ color: '#1e293b', fontWeight: 700 }}>
          Product Management
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <IconButton sx={{ color: '#64748b' }}>
            <Notifications />
          </IconButton>
          <IconButton sx={{ color: '#64748b' }}>
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
