import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#2563eb' },
    secondary: { main: '#64748b' },
    background: { default: '#f8fafc', paper: '#ffffff' }
  },
  shape: { borderRadius: 12 },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: { 
          width: 260, 
          background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
          color: 'white'
        }
      }
    },
    MuiDataGrid: {
      styleOverrides: {
        root: { borderRadius: 12 }
      }
    }
  }
});
