import {logger} from "./logger";
import {BAD_REQUEST, NOT_FOUND} from "http-status-codes";


const fetch = require("node-fetch");
const urlOK = "http://www.mocky.io/v2/5e998c423300003e267b2578?mocky-delay=1000ms";
const urlFailingWith404 = "http://www.mocky.io/v2/5e99acce3300004c697b2a46";
const urlFailingWith500 = "http://www.mocky.io/v2/5e99ad2333000095687b2a4e";

export const allCalls = (): void => {

    // calling with 200
    restCallWithGet(urlOK)
        .then(value => logger.info("coming from rest call " + JSON.stringify(value)))
        .catch((err) => {
            logger.error(err)
        });

    // calling with 404
    restCallWithGet(urlFailingWith404)
        .then(value => logger.info("worked" + JSON.stringify(value)))
    .catch((err)=> {
        logger.error("Houston we have a problem \n " + err);
    });

    // calling with 500
    restCallWithGet(urlFailingWith404)
        .then(value => logger.info("worked" + JSON.stringify(value)))
        .catch((err)=> {
            logger.error("Alderaan is gone \n" + err);
        });

};

const restCallWithGet = (url: string): Promise<string> => new Promise<string>((resolve, reject) => {

    fetch(url)
        .then((response: Response) => {

            if (!response.ok) {
                logger.error("response had status" + response.status);

                if(response.status === BAD_REQUEST) {
                    logger.error("you made a bad request");
                }
                if(response.status === NOT_FOUND) {
                    logger.error("data was not found");
                }
                reject(response.statusText);

            }else {

                logger.info("status was " + response.status);
                resolve(response.json());
            }
        })
        .catch((err) => {
            logger.error("error catch");

            reject(err);
        });
});
