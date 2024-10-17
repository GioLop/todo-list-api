import http, { Server } from 'node:http';
import app from './app';
import config from './config/app.config';

const { API_SERVICE_PORT } = config;

// eslint-disable-next-line @typescript-eslint/no-misused-promises
const server = http.createServer(app);

const initServer = (port: string | number, server: Server) => {
    server.listen(port, () =>{
        console.log(`Server listening on http://localhost:${port}`);
    });
};

initServer(API_SERVICE_PORT, server);