import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { useRoutes } from 'react-router-dom';
import Routes from './app.routes';
import Container from '@mui/material/Container';
import Layout from './Layout';

export default function App() {
    const myRoutes = useRoutes(Routes);

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout />
                <Container maxWidth="xl">{myRoutes}</Container>
            </ThemeProvider>
        </>
    );
}
