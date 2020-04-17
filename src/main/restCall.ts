import {logger} from "./logger";

const fetch = require("node-fetch");
const urlOK = "http://www.mocky.io/v2/5e998c423300003e267b2578?mocky-delay=1000ms";
const urlFailing = "http://www.mocky.io/v2/5e998c423300003e267b2578";

export const allCalls = (): void => {

    restCallWithGet(urlOK)
        .then(value => {

            logger.info("coming from rest call " + JSON.stringify(value))
        })
        .catch((err) => {
            logger.error(err)
        });

    }

const restCallWithGet = (url: string): Promise<string> => new Promise<string>((resolve, reject) => {

    fetch(url)
        .then((response: Response) => {
            if (!response.ok) {
                logger.error("response had status" + response.status);
                reject(response.statusText);
            }
            logger.info("status was " + response.status);
            resolve(response.json());

        })
        .catch((err )=> {
            logger.error("error catch");
            reject(err);
    });
});
