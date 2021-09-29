import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          //  Work in progress for future Amar and day and night
          // backgroundColor: '#403D39',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#252422',
    },
    secondary: {
      main: '#403D39',
    },
    error: {
      main: '#EB5E28',
    },
    background: {
      default: '#FFFCF2',
    },
    success: {
      main: '#2e8b57',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

export default theme
