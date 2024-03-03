import x, {
    myArray,
    myArray2 as benimObjem,
    myArray3,
} from "./64-moduller_data.js";
// import x from "./64-moduller_data.js";

console.log(x);
console.log(benimObjem);

const topla = (...sayilar) => {
    return sayilar.reduce((acc, curr) => acc + curr, 0);
};

console.log(topla(myArray));
