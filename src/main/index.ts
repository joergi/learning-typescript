import express, {Express} from "express";
import {logger} from "./logger";
import {publicFunction} from "./otherclass";
import {overloadedFunction} from "./methodOverloading";


const app: Express = express();
const port: number = 7777;

const server = app.listen(port, () => {

    // 1st step
    logger.info("Server started on localhost:" + port);

    // 2nd step - calling functions
    publicFunction("Hello, I'm a test from the outside");

    // 3rd step - method overloading
    callingMethodOverloading();
});

export = server;

function callingMethodOverloading(){
    logger.info(overloadedFunction("only one string"));
    logger.info(overloadedFunction(666));
    logger.info(overloadedFunction("only one string", "but now with 2 strings"));
    logger.info(overloadedFunction("only one string", 666));
    logger.info(overloadedFunction(42, "only one string"));
    logger.info(overloadedFunction(42, 666));
}
