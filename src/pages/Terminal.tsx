import { callCommand } from '../minima/rpc-commands';
import { useState, useRef, useEffect } from 'react';
import { Button, Paper, TextField } from '@mui/material';
import { useSnackbar } from 'notistack';

const Terminal = () => {
    const [command, setCommand] = useState('');
    const [commandResponses, setCommandResponses] = useState<any[]>([]);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            // @ts-ignore
            scrollRef.current.scrollIntoView({ behaviour: 'smooth' });
        }
    }, [commandResponses]);

    const onCallMinimaCommandClicked = () => {
        if (command === '') {
            enqueueSnackbar('No command', { variant: 'error' });
        } else {
            callCommand(command).then((data) => {
                setCommand('');
                if (data.status) {
                    setCommandResponses((old) => [...old, data.response]);
                } else {
                    enqueueSnackbar(data.error, { variant: 'error' });
                }
            });
        }
    };

    return (
        <>
            <h1>Terminal</h1>
            {commandResponses.map((res) => (
                <Paper sx={{ p: 2, mb: 2, overflow: 'auto' }}>
                    <pre>{JSON.stringify(res, null, 2)}</pre>
                </Paper>
            ))}

            <TextField
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                sx={{ mb: 2 }}
                fullWidth
                label="Type minima command"
                id="minima-command"
                variant="filled"
            />
            <Button variant="contained" onClick={onCallMinimaCommandClicked} ref={scrollRef}>
                Send
            </Button>

            {/* Added as a spacer (wrong i know!) */}
            <h1></h1>
        </>
    );
};

export default Terminal;
