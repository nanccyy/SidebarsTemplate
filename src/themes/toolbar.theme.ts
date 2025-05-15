import { createTheme } from "@mui/material";
import { theme } from "./main";

export const toolbarTheme = createTheme(theme, {
    palette: {
      primary: {
        main: '#000', // dark text color
      },
      background: {
        default: '#fff', // white background
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: theme.palette.background.default, // white background
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // shadowed border
            color: '#000', // dark text color
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            // backgroundColor: '#fff',
            // borderBottom: '1px solid rgba(0, 0, 0, 0.12)', // bottom border
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: '#000', // dark text color
          },
        },
      },
    },
  });
  
