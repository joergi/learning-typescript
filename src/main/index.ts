import express, {Express} from "express";
import {logger} from "./logger";
import {publicFunction} from "./otherclass";


const app: Express = express();
const port: number = 7777;

const server = app.listen(port, () => {
    logger.info("Server started on localhost:" + port);
    publicFunction("Hello, I'm a test from the outside");
});

export = server;
