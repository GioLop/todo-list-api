import http, { Server } from 'node:http';
import app from './app';

const SERVER_PORT = 3000;

// eslint-disable-next-line @typescript-eslint/no-misused-promises
const server = http.createServer(app);

const initServer = (port: string | number, server: Server) => {
    server.listen(port, () =>{
        console.log(`Server listening on http://localhost:${port}`);
    });
};

initServer(SERVER_PORT, server);