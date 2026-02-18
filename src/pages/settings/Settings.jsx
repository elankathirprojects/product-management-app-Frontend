import React, { useState } from 'react';
import { 
  Box, Paper, Typography, Switch, FormControlLabel, 
  Divider, Button, TextField 
} from '@mui/material';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    twoFactor: true,
    autoSave: true
  });

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    console.log('Settings saved:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" fontWeight={700} sx={{ mb: 4, color: '#1e293b' }}>
        Settings
      </Typography>

      <Paper sx={{ p: 6, maxWidth: 600 }}>
        <Box sx={{ mb: 5 }}>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 3, color: '#1e293b' }}>
            General Settings
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <FormControlLabel
              control={<Switch checked={settings.notifications} onChange={() => handleToggle('notifications')} />}
              label="Enable email notifications"
            />
            <FormControlLabel
              control={<Switch checked={settings.darkMode} onChange={() => handleToggle('darkMode')} />}
              label="Dark mode"
            />
            <FormControlLabel
              control={<Switch checked={settings.autoSave} onChange={() => handleToggle('autoSave')} />}
              label="Auto-save drafts"
            />
          </Box>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ mb: 5 }}>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 3, color: '#1e293b' }}>
            Security
          </Typography>
          <FormControlLabel
            control={<Switch checked={settings.twoFactor} onChange={() => handleToggle('twoFactor')} />}
            label="Two-factor authentication"
          />
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 3, color: '#1e293b' }}>
            Account
          </Typography>
          <TextField
            fullWidth
            label="Change Password"
            type="password"
            placeholder="Enter new password"
            sx={{ mb: 3 }}
          />
        </Box>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
          <Button variant="outlined" size="large">Cancel</Button>
          <Button variant="contained" size="large" onClick={handleSave}>
            Save Changes
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Settings;
