import { useState } from 'react';
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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Routes from './app.routes';
import { Outlet, Link } from 'react-router-dom';
import { callStatusSingle } from './minima/rpc-commands';
import useMinimaBlockNumber from './minima/useMinimaBlockNumber';

export default function Layout() {
    const [isOpen, setIsOpen] = useState(false);
    const blockNumber = useMinimaBlockNumber();

    const toggleDrawer = (open: boolean) => () => {
        setIsOpen(open);
    };

    const activeRoute = (routeName: any) => {
        return window.location.pathname === routeName ? true : false;
    };

    console.log('blockNumber', blockNumber);

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Minidapp Boilerplate
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer open={isOpen} onClose={toggleDrawer(false)}>
                <div role="presentation" onClick={toggleDrawer(false)}>
                    <MenuList>
                        {Routes.map((prop, key) => {
                            return (
                                <Link to={prop.path} style={{ textDecoration: 'none' }} key={key}>
                                    <MenuItem selected={activeRoute(prop.path)}>
                                        <ListItemText primary={prop.sidebarName} />
                                    </MenuItem>
                                </Link>
                            );
                        })}
                    </MenuList>
                </div>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Blocknumber: {blockNumber}
                </Typography>
            </Drawer>
            <Outlet></Outlet>
        </>
    );
}
