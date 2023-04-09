import { StringCodec, NatsConnection } from "nats";

const replyTime = (nc: NatsConnection) => {
    const sc = StringCodec();

    const subscription = nc.subscribe("time");
    (async (sub) => {
        for await (const m of sub) {
            if (m.respond(sc.encode(new Date().toISOString()))) {
                console.info(`[time] handled #${sub.getProcessed()}`);
            } else {
                console.log(`[time] #${sub.getProcessed()} ignored - no reply subject`);
            }
        }
    })(subscription);
}

export {
    replyTime
}