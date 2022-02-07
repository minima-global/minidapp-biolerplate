import useBalance from '../minima/useBalance';
import { List, ListItemButton, Grid, Avatar } from '@mui/material';
import MinimaIcon from '../assets/images/minimaLogoSquare.png';

const Balance = () => {
    const balance = useBalance();

    // console.log('balance', balance);

    return (
        <>
            <Grid container spacing={2} sx={{ marginTop: { xs: 0 } }}>
                <Grid item xs={0} md={2}></Grid>
                <Grid item xs={12} md={8}>
                    <List>
                        {balance?.map((item, i) => (
                            <ListItemButton key={i}>
                                <Avatar
                                    sx={{ marginRight: 2 }}
                                    src={
                                        item.tokenid === '0x00'
                                            ? MinimaIcon
                                            : !item.token.icon || item.token.icon.length === 0
                                            ? `https://robohash.org/${item.tokenid}`
                                            : item.token.icon && item.token.icon
                                            ? item.token.icon
                                            : ''
                                    }
                                    alt={item.token}
                                />
                                {`${item.token} ${item.confirmed}`}
                            </ListItemButton>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={0} md={2}></Grid>
            </Grid>
        </>
    );
};

export default Balance;

const BalanceItem = () => {};
