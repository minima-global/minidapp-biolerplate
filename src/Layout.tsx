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
                <Toolbar>Minima Boilerplate</Toolbar>
                <Toolbar>
                    <IconButton color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography>Page Name</Typography>
                </Toolbar>
            </AppBar>
            <Drawer open={isOpen} onClose={toggleDrawer(false)}>
                <MenuList>
                    {Routes.map((prop, key) => {
                        return (
                            <Link to={prop.path} key={key}>
                                <MenuItem selected={activeRoute(prop.path)}>
                                    <ListItemText primary={prop.sidebarName} />
                                </MenuItem>
                            </Link>
                        );
                    })}
                </MenuList>
                <Typography>Blocknumber: {blockNumber}</Typography>
            </Drawer>
            <Outlet></Outlet>
        </>
    );
}
