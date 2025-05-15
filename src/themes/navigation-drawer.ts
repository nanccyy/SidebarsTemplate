import { createTheme } from '@mui/material/styles';
export const navigationDrawerTheme = createTheme({
    // palette: {
    //     primary: {
    //        main: '#0099ff' 
    //     },
    //     secondary: {
    //         main: '#ff0000'
    //     }
    // }, 
    components: {
        MuiToolbar: {   
            styleOverrides: {
                root: {
                    minHeight: '40px',
                    height: '40px',
                    backgroundColor: '#363636' 
                }
            }
        },
        MuiPaper: {
            
            styleOverrides: {
                root: {

          
                    // 'backgroundColor:hover': '#58595b',
                    // backgroundColor: '#363636' 
                }
            }
        },
        MuiTypography: {
            styleOverrides:{
                root: {
                    // color:'#fff',
                    // 'backgroundColor:hover': '#58595b',
                }
            }
        },
        MuiList: {
            styleOverrides: {
                root: {
                    // backgroundColor: '#363636'
                }
            }
        },

        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    // color: '#fff',
                    // textShadow: '#fff'
                    // backgroundColor: '#fff'
                }
            },
            defaultProps: {
            },
          }
    }
  });