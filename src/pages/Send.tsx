import { callSend } from '../minima/rpc-commands';
import { useSnackbar } from 'notistack';
import { Button } from '@mui/material';

const Send = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const onSendClicked = () => {
        callSend({
            address: '',
            amount: '',
            tokenid: '',
        }).then(
            (res) => {
                console.log(res);
                enqueueSnackbar('success', { variant: 'success' });
            },
            () => {
                enqueueSnackbar('error', { variant: 'error' });
            }
        );
    };

    return (
        <>
            <h1>Send</h1>
            <Button variant="contained" onClick={onSendClicked}>
                Send
            </Button>
        </>
    );
};

export default Send;
