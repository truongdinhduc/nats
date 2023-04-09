import { StringCodec, NatsConnection } from "nats";

const readline = require('readline').createInterface({
    input: process.stdin,
});

const initChatSubscribers = (nc:NatsConnection) => {
    let sc = StringCodec();

    let connected = nc.subscribe('connected');
    (async () => {
        for await (const m of connected) {
            console.log(`${sc.decode(m.data)}`);
            readline.question(``, (newMessage:string) => {
                nc.publish('newMessage', sc.encode('Server 1: ' + newMessage))
            });
        }
    })();

    let newMessage = nc.subscribe('newMessage');
    (async () => {
        for await (const m of newMessage) {
            console.log(`${sc.decode(m.data)}`);
            readline.question(``, (newMessage:string) => {
                nc.publish('newMessage', sc.encode('Server 1: ' + newMessage))
            });
        }
    })();

    nc.publish('connected', sc.encode('Server 1 connected'))
}

export {
    initChatSubscribers
}