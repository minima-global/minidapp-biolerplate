import { useState, useEffect } from 'react';
import { callBalance } from './rpc-commands';

export type Token = {
    token: string;
    tokenid: string;
    confirmed: string;
    unconfirmed: string;
    total: string;
};

const useBalance = () => {
    const [balance, setBalance] = useState<Token[]>([]);

    useEffect(() => {
        setInterval(() => {
            callBalance().then(
                (data) => {
                    if (data.status) {
                        setBalance(data.response);
                    }
                },
                (err) => {
                    console.error(err);
                    setBalance([]);
                }
            );
        }, 10000);
    }, []);

    return balance;
};

export default useBalance;
