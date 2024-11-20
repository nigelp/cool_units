import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider, createTheme } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { registerSW } from 'virtual:pwa-register'

// Register service worker
registerSW({ immediate: true })

const theme = createTheme({
  palette: {
    primary: {
      main: '#6366f1',
      light: '#818cf8',
      dark: '#4f46e5',
    },
    secondary: {
      main: '#ec4899',
      light: '#f472b6',
      dark: '#db2777',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(to bottom right, rgba(255,255,255,0.9), rgba(255,255,255,0.95))',
          backdropFilter: 'blur(10px)',
          borderRadius: 16,
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          border: '1px solid rgba(255,255,255,0.7)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&.MuiChip-filled': {
            background: 'linear-gradient(135deg, #6366f1, #818cf8)',
            color: 'white',
            boxShadow: '0 2px 4px rgba(99, 102, 241, 0.2)',
          },
          '&.MuiChip-outlined': {
            borderColor: '#6366f1',
            color: '#6366f1',
            '&:hover': {
              background: 'rgba(99, 102, 241, 0.04)',
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            },
            '&.Mui-focused': {
              boxShadow: '0 4px 6px rgba(99, 102, 241, 0.1)',
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #6366f1, #818cf8)',
          color: 'white',
          padding: 12,
          '&:hover': {
            background: 'linear-gradient(135deg, #4f46e5, #6366f1)',
            transform: 'scale(1.05)',
          },
          transition: 'all 0.2s ease-in-out',
          boxShadow: '0 2px 4px rgba(99, 102, 241, 0.2)',
        },
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
