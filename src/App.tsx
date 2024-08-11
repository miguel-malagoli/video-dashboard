import { createTheme, ThemeProvider } from '@mui/material';
import SidebarProvider from '@contexts/SidebarContext';
import AppRoutes from '@pages/AppRoutes';

let themeGray = createTheme({
    palette: {
        primary: {
            main: '#1cbaa6',
            dark: '#158e7d'
        },
        secondary: {
            main: '#b8b8b8'
        },
        info: {
            main: '#471e98',
            dark: '#39363f'
        },
        background: {
            default: '#232325',
            paper: '#2f2f2f'
        },
        text: {
            primary: '#ffffff',
            secondary: '#b8b8b8',
            disabled: '#545454'
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1280,
            xl: 1536
        }
    }
});
themeGray = createTheme(themeGray, {
    typography: {
        h1: {
            fontSize: '32px',
            lineHeight: '40px',
            fontWeight: '700',
            color: themeGray.palette.text.primary
        }
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: themeGray.palette.text.secondary
                }
            }
        },
        MuiInputAdornment: {
            styleOverrides: {
                root: {
                    color: themeGray.palette.text.primary
                }
            }
        }
    }
});

function App() {
    return (
        <ThemeProvider theme={themeGray}>
            <SidebarProvider>
                <AppRoutes />
            </SidebarProvider>
        </ThemeProvider>
    );
}

export default App;
