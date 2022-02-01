import { STATUS, BALANCE, RPCHOST, SEND, HELP, ADDRESS, TOKENCREATE } from './constants';

export const callToken = (data: any) => () => {
    const url = `${RPCHOST}${TOKENCREATE}+name:${JSON.stringify(data.name)}+amount:${data.amount}`;
    return fetch(url, {
        method: 'GET',
        mode: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => result.json());
};

interface SendData {
    address: string;
    amount: string;
    tokenid: string;
}

export const callSend = (data: SendData) => {
    const url = `${RPCHOST}${SEND}+address:${data.address}+amount:${data.amount}+tokenid:${data.tokenid}`;
    return new Promise((resolve, reject) => {
        return fetch(url, {
            method: 'GET',
            mode: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((result) => result.json())
            .then((res) => {
                if (res.status) {
                    resolve(res);
                } else {
                    reject(res);
                }
            });
    });
};

export const callAddress = () => {
    const url = `${RPCHOST}${ADDRESS}`;
    return fetch(url, {
        method: 'GET',
        mode: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => result.json());
};

export const callStatus = () => {
    const url = `${RPCHOST}${STATUS}`;
    return fetch(url, {
        method: 'GET',
        mode: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => result.json());
};

export const callBalance = () => {
    const url = `${RPCHOST}${BALANCE}`;
    return fetch(url, {
        method: 'GET',
        mode: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => result.json());
};

export const callHelp = () => {
    const url = `${RPCHOST}${HELP}`;
    return fetch(url, {
        method: 'GET',
        mode: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((result) => result.json());
};
