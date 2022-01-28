import ManropRegular from './Manrope-Regular.woff2';
import FrostedBlue from './frosted-blue.jpg';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
let theme = createTheme({
    palette: {
        primary: {
            main: '#317aff',
        },
        secondary: {
            main: '#ff512f',
        },
        background: {
            default: '#e9e9eb',
        },
        text: {
            primary: '#363a3f',
        },
        warning: {
            main: '#fdefbe',
        },
        success: {
            main: '#b6f4ee',
        },
    },
    typography: {
        fontFamily: ['Manrope-regular'].join(','),
        h2: {
            fontWeight: 700,
            fontSize: 18,
            lineHeight: 1,
        },
        h1: {
            fontSize: 52,
        },
        body1: {
            fontSize: 17,
            fontWeight: 300,
            lineHeight: 1.04,
        },
    },
    shape: {
        borderRadius: 12,
    },

    spacing: 8,

    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
                font-family: Manrope-regular;
                src: url(${ManropRegular}) format('woff2');
            }

            body {
                background-image: url(${FrostedBlue});
                background-size: 100%;
            }
          `,
        },
    },
});

theme = createTheme(theme, {
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    fontSize: '1rem',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.text.primary,
                },
            },
        },
    },
});

export default theme;

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}
