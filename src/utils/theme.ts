import { createTheme } from '@mui/material';

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
        },
        common: {
            black: '#121212',
            white: '#ffffff'
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
        },
        h2: {
            fontSize: '20px',
            lineHeight: '32px',
            fontWeight: '500',
            color: themeGray.palette.text.primary
        },
        h3: {
            fontSize: '17px',
            lineHeight: '20px',
            fontWeight: '400',
            color: themeGray.palette.text.primary
        },
        subtitle1: {
            fontSize: '12px',
            lineHeight: '12px',
            fontWeight: '400',
            letterSpacing: '0.22px',
            color: themeGray.palette.text.secondary
        },
        body1: {
            fontSize: '14px',
            lineHeight: '24px',
            fontWeight: '400',
            color: themeGray.palette.text.primary
        },
        body2: {
            fontSize: '14px',
            lineHeight: '24px',
            fontWeight: '500',
            color: themeGray.palette.text.secondary
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

export default themeGray;
