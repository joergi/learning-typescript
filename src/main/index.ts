import express, {Express} from "express";
import logger from "./logger";

const app: Express = express();
const port: number = 7777;


const server = app.listen(port, () => {
    logger.info("hello world - server started at localhost:" +port);
});

export = server;
