import useBalance from '../minima/useBalance';
import { List, ListItem } from '@mui/material';

const Balance = () => {
    const balance = useBalance();

    console.log('balance', balance);

    return (
        <>
            <h1>Balance</h1>
            <List>
                {balance.map((item, i) => (
                    <ListItem key={i}>{`${item.token} ${item.confirmed}`}</ListItem>
                ))}
            </List>
        </>
    );
};

export default Balance;
