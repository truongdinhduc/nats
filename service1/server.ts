import express from 'express';
import http from 'http';
import setup from './src/server/setup';
import 'dotenv/config';
import { routes } from './src/routes';
import { connectToNats } from './src/nats/connect';

var app: express.Application = express();
app = setup(app)

connectToNats()

const server = http.createServer(app);

let serverPort = process.env.SERVER_PORT

server.listen(serverPort, ()=>{
    console.log('Server is ready on http://localhost:' + serverPort)
})