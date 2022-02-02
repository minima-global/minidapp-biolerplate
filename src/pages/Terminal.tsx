import { callCommand } from '../minima/rpc-commands';

const Terminal = () => {
    callCommand('status').then(console.log);
    return <h1>Terminal</h1>;
};

export default Terminal;
