// JAVASCRIPT SENKRON CALISAN BIR DILDIR
// SENKRON CALISAN BIR DILDE KODLAR YUKARIDAN ASAGIYA DOGRU CALISIR

console.log("Burasi ilk calisir");

setTimeout(() => {
    myFunction();
    console.log("Cirak agir isleri yapiyor");
}, 3000);

setTimeout(() => {
    myFunction2();
    console.log("Usta agir isleri yapiyor");
}, 500);

console.log("Burasi ikinci calisir");

console.log("Burasi ucuncu calisir");

console.log("Burasi dorduncu calisir");

console.log("Burasi besinci calisir");

console.log("Burasi altinci calisir");

console.log("Burasi yedinci calisir");

console.log("Burasi en son calisir");

function myFunction() {
    for (let i = 0; i < 5000000000; i++) {}
    console.log("dongu bitti calisti");
}

function myFunction2() {
    for (let i = 0; i < 5000000000; i++) {}
    console.log("myFunction2 calisti");
}

// JAVASCRIPT IDLE - CALISMIYOR SU ANDA

let data = {};

function getData() {
    setTimeout(() => {
        data = { title: "JavaScript", lesson: "Async" };
        return data;
    }, 2000);
}

console.log(getData());
