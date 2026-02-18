import React, { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <Box sx={{ p: 3, mt: 8 }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
