import express from "express";
import config from "./config";
var cors = require('cors');

import almacen_routes from './routes/almacen_routes';

const app = express();

app.set('port', config.port);

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({extended: false}));

app.use(almacen_routes);






export default app;


