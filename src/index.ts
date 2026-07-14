import 'reflect-metadata';
import './util/module-alias';
import { SetupServer } from '@src/server';

const port = Number(process.env.PORT) || 3000;
const server = new SetupServer(port);
server.init();
