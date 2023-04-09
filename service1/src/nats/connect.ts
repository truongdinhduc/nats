import { connect, StringCodec, NatsConnection } from "nats";
import { initChatSubscribers } from "./services/chat/subscribers";
import { replyTime } from "./services/timer/subscribers";

const connectToNats = async () => {
    const nc:NatsConnection = await connect({ servers: 'demo.nats.io:4222' });
    const sc = StringCodec();
    initChatSubscribers(nc);
    replyTime(nc);
}

export {
    connectToNats
}