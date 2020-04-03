import {logger} from "./logger";

// the private function, can't be called from outside
function privateFunction(someString: String) {
    logger.info("this is coming from outside: " + someString
}

// the public function, it can be called from the outside.
export function publicFunction(stringFromOutside: String) {
    privateFunction(stringFromOutside);
}


