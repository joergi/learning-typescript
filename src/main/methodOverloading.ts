import {logger} from "./logger";

export function overloadedFunction(onlyOneString: string): string;
export function overloadedFunction(onlyOneNumber: number): string;
export function overloadedFunction(twoStrings1: string, twoStrings2: string): string;
export function overloadedFunction(twoNumbers1: number, twoNumbers2: number): string;
export function overloadedFunction(twoStrings1: string, twoNumbers2: number) :string;
export function overloadedFunction(twoNumbers1: number, twoString2: string) :string;

export function overloadedFunction(firstParam: string | number, secondParam?: string | number) {

    if (typeof secondParam === 'undefined') {

        if (typeof firstParam === "string") {
            return "only one string: " + firstParam;
        }
      
        if (typeof firstParam === "number") {
            return "only one number" + firstParam;
        }

    } else {

        if (typeof firstParam === "string" && typeof secondParam === "string") {
            return " first param is string" + firstParam + " second param is string  " + secondParam;
        }

        if (typeof firstParam === "number" && typeof secondParam === "number") {
            return " first param is number" + firstParam + " second param is number  " + secondParam;
        }

        if (typeof firstParam === "number" && typeof secondParam === "string") {
            return " first param is number" + firstParam + " second param is string  " + secondParam;
        }

        if (typeof firstParam === "string" && typeof secondParam === "number") {
            return " first param is string" + firstParam + " second param is number  " + secondParam;

        }
    }
}