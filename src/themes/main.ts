import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: '#F5F5F5', // Background color for the whole app
      paper: '#ffffff', // Background color for surfaces like cards, modals, etc.
    },
    text: {
      secondary: '#545b64',
    },
    error: {
      main: '#d32f2f', // Custom error color
      // main: '#ed1c24',
      light: '#ff6659', // Light variant
      dark: '#9a0007', // Dark variant
      contrastText: '#fff', // Text color on error background
    },
    success: {
      main: '#2e7d32', // Custom success color
      // main: '#48a474',
      light: '#60ad5e', // Light variant
      dark: '#005005', // Dark variant
      contrastText: '#fff', // Text color on success background
    },
    // warning: {
    // main: '#fab218'
    // },
    secondary: {
      dark: '#414142',
      main: '#414142',
      light: '#ffffff',
    },
  },
  typography: {
    fontSize: 14,
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '16px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
        },
      },
    },

    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff', // Ensures table background is white
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          verticalAlign: 'middle',
          backgroundColor: '#fff',
        },
        head: {
          height: '55px',
          verticalAlign: 'middle',
        },
      },
    },
  },
  // palette: {
  //   primary: {
  //     // main: '#fab216;',
  //   },
  // },
});
