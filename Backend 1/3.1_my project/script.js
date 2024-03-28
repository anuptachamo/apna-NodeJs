import { sum, PI } from "./importAndExport.js";
import { generate} from "random-words";  //npm install random-words
console.log(`Sum of a and b: ${sum(2,3)}`);
console.log("Generate random words:", generate());


/**
 * NOTE:
 *  While importing and exporting, in package.json file you needed to add "type" : "module"
 *      And while importing import file should be run
 */