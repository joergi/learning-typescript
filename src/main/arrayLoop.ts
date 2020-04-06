import {logger} from "./logger";

let arrayForLooping1: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];

let arrayForLooping2: Array<string> = ["A", "B", "C", "D", "E", "F", "G", "H"];

export function forLoop(){
    logger.info("for loop start");
    for (let i = 0; i < arrayForLooping1.length; i++){
        logger.info("for Loop #" + i + " - " + arrayForLooping1[i]);
    }
    logger.info("for loop end");
}

export function forEachLoop(){
    logger.info("for each loop start");
    arrayForLooping2.forEach(function (inLoop) {
        logger.info("for each: " + inLoop)
    });
    logger.info("for each loop end");
}
