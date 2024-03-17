



let vize1 = Number(prompt("Vize 1 notunuzu giriniz"));
let vize2 = Number(prompt("Vize 2 notunuzu giriniz"));
let final = Number(prompt("Final notunuzu giriniz"));

let ortalama = (vize1 + vize2)/2;

let not = (ortalama)*0.3 + (final*0.7);

confirm(`Notunuz: ${not}`);