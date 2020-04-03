import winston, { Logger } from "winston";

export const logger: Logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf((info) => {
            return `${info.timestamp} ${info.level}: ${info.message}`;
        })
    ),
    level: "info",
    transports: [new winston.transports.Console()]
});
// code from  https://github.com/vinodseb/typescript-test/blob/master/src/main/logger.ts
