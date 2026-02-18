import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Box, Typography } from '@mui/material';
import { 
  LayoutDashboard, Package, Users, Settings, LogOut 
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Package, label: 'Products', path: '/products' },
    { icon: Users, label: 'Users', path: '/users' },
    { icon: Settings, label: 'Settings', path: '/settings' }
  ];

  return (
    <Drawer variant="permanent" open={open}>
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 700 }}>
          ProductManager
        </Typography>
      </Box>
      <List sx={{ mt: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton 
              selected={location.pathname === item.path}
              onClick={() => {
                navigate(item.path);
                onClose();
              }}
              sx={{ 
                borderRadius: 2, 
                mx: 1,
                '&.Mui-selected': { backgroundColor: 'rgba(255,255,255,0.1)' }
              }}
            >
              <ListItemIcon sx={{ color: 'white', minWidth: 48 }}>
                <item.icon size={20} />
              </ListItemIcon>
              <ListItemText primary={item.label} sx={{ color: 'white' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List sx={{ mt: 'auto', p: 2 }}>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderRadius: 2 }}>
            <ListItemIcon sx={{ color: 'white', minWidth: 48 }}>
              <LogOut size={20} />
            </ListItemIcon>
            <ListItemText primary="Logout" sx={{ color: 'white' }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
