import express, {Express} from "express";
import {logger} from "./logger";
import {constFunction, publicFunction} from "./otherclass";
import {overloadedFunction} from "./methodOverloading";
import {forEachLoop, forLoop} from "./arrayLoop";


const app: Express = express();
const port: number = 7777;

const server = app.listen(port, () => {
    // 1st step
    logger.info("################################# STEP 1 - init ##############################################");
    logger.info("Server started on localhost:" + port);
    logger.info("\n");

    // 2nd step - calling functions
    logger.info("################################# STEP 2 - calling functions #################################");
    publicFunction("Hello, I'm a test from the outside");
    logger.info("this is coming from the const function: " + constFunction)
    logger.info("\n");

    // 3rd step - method overloading
    logger.info("################################# STEP 3 - method overloading ################################");
    callingMethodOverloading();
    logger.info("\n");

    // 4th stop - array and loop
    logger.info("################################# STEP 4 - array and loop ####################################");
    forLoop();
    logger.info("\n");
    forEachLoop();
    logger.info("\n");
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
