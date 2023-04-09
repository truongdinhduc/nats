import { connect, StringCodec, NatsConnection } from "nats";
import { initChatSubscribers } from "./services/chat/subscribers";
import { requestTime } from "./services/timer/requests";

const connectToNats = async () => {
    const nc:NatsConnection = await connect({ servers: 'demo.nats.io:4222' });
    const sc = StringCodec();
    initChatSubscribers(nc);
    requestTime(nc);
}

export {
    connectToNats
}