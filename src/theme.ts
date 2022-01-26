import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#ffffff',
        },
        text: {
            primary: '#000',
        },
    },
    typography: {
        fontFamily: '"Manrope", "Helvetica", "Arial", sans-serif',
    },
    shape: {
        borderRadius: 12,
    },
})

export default theme
