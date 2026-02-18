import React from 'react';
import { 
  Box, Grid, Card, CardContent, Typography, Chip, Avatar 
} from '@mui/material';
import { 
  Inventory2, ShoppingCart, LocalShipping, TrendingUp 
} from '@mui/icons-material';

const Dashboard = () => {
  const stats = [
    { title: 'Total Products', value: '1,234', change: '+12%', icon: Inventory2, color: '#10b981' },
    { title: 'Low Stock', value: '23', change: '-2%', icon: ShoppingCart, color: '#f59e0b' },
    { title: 'Orders', value: '456', change: '+28%', icon: LocalShipping, color: '#3b82f6' },
    { title: 'Revenue', value: '₹2.45L', change: '+18%', icon: TrendingUp, color: '#ef4444' }
  ];

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h3" fontWeight={700} sx={{ color: '#1e293b' }}>
          Dashboard Overview
        </Typography>
        <Chip label="Last 30 days" color="primary" variant="outlined" />
      </Box>

      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ 
              height: '100%', 
              borderRadius: 3, 
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: '0.3s',
              '&:hover': { transform: 'translateY(-4px)' }
            }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: 'primary.light', width: 48, height: 48 }}>
                    <stat.icon sx={{ fontSize: 24, color: stat.color }} />
                  </Avatar>
                  <Box sx={{ ml: 'auto' }}>
                    <Chip 
                      label={stat.change} 
                      size="small" 
                      sx={{ bgcolor: stat.color + '20', color: stat.color, fontWeight: 600 }} 
                    />
                  </Box>
                </Box>
                <Typography variant="h4" fontWeight={700} sx={{ mb: 1, color: '#1e293b' }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
