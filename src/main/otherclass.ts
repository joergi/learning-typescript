// the private function, can't be called from outside
function privateFunction(someString: String) {
    console.log("this is coming from outside: " + someString);
}

// the public function, it can be called from the outside.
export function publicFunction(stringFromOutside: String) {
    privateFunction(stringFromOutside);
}

export const constFunction = (): string => {
    return "this is a const Function ";
}
