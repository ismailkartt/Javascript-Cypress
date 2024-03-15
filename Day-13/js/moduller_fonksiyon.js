import myNewArray, {myArray} from "./moduller_data.js";
import abc from "./moduller_data.js";

const topla = (...sayilar) => {
    return sayilar.reduce((acc,cur) => acc + cur, 0);
};

console.log(topla(myArray));
console.log(myNewArray)

