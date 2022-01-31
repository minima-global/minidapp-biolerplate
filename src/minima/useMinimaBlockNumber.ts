import { useState, useEffect } from 'react';
import { callStatusSingle } from './rpc-commands';

const useMinimaBlockNumber = () => {
    const [minimaBlockNumber, setMinimaBlockNumber] = useState(-1);

    useEffect(() => {
        setInterval(() => {
            console.log('requestiing block number...');
            callStatusSingle().then(
                (data) => {
                    // console.log(data.response.chain);
                    setMinimaBlockNumber(data.response.chain.block);
                },
                (err) => {
                    // console.error(err);
                    setMinimaBlockNumber(-1);
                }
            );
        }, 10000);
    }, []);

    return minimaBlockNumber;
};

export default useMinimaBlockNumber;
