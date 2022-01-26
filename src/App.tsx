import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    MenuList,
    MenuItem,
    ListItemText,
    Button,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

function App() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={console.log}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Minidapp Boilerplate
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default App
