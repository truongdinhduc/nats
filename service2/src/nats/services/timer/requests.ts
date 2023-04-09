import { StringCodec, Empty, NatsConnection } from "nats";

const requestTime = async (nc: NatsConnection) => {
    const sc = StringCodec();

    await nc.request("time", Empty, { timeout: 1000 })
        .then((m) => {
            console.log(`got response: ${sc.decode(m.data)}`);
        })
        .catch((err) => {
            console.log(`problem with request: ${err.message}`);
        });
}

export {
    requestTime
}