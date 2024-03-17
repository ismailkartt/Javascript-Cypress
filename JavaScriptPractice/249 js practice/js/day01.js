console.log('hello world!!');

//alert('bu bir uyaridir!')
//let age=prompt('yasiniz kac');
//console.log(age);

// variables 
//var
//let 
//const  -> sabit 

console.warn('uyari!!')
console.error('Hata')

//confirm('bu dosyayi kapatmak isiyor musunuz')
//onaylamak


//string literal
let name="jane";
//traditional 
console.log("merhaba " +name);

//
console.log(`Merhaba ${name}`);


////////////////////////////!SECTION
// Number 
// Boolean 
// String 
// Object 
// Array


let name2='Aise';
console.log(typeof(name2));
let num='90';
console.log(typeof(num));
console.log(typeof(Number(num)));
console.log(typeof(Boolean(num)));
console.log(Boolean(num));


//js hangi degerler false?  -> 6 tane 
//undefined , 0, false, null, '', 

//ORNEK 1
//Kullanicidan alacaginiz vize1, vize2 ve final notlarini vize ortalamasinin %30 u final notunun %70 alrak gecme notunu hesaplayiniz
// ctrl+c ->kopyalamak 
// ctrl+v  -> yapistirmak
// alt+ shıft +asagı oku

// ctrl+d -> lopyala yapistir altalta


// let vize1=Number(prompt('Vize 1 notunu giriniz!'));
// let vize2=Number(prompt('Vize 2 notunu giriniz!'));
// let final=Number(prompt('Final notunu giriniz!'));
// ///let vize1num=Number(vize1);
// let ortlm=(vize1+vize2)/2;

// console.log(ortlm*0.3 +final*0.7);

//concatination 

//ORNEK 2:
//Dikdortgenin cevresini hesaplayan kodu yaziniz..
// let kisaKenar=Number(prompt('Dikdortgenin birinci kenarini giriniz!'))
// let uzunKenar=Number(prompt('Dikdortgenin ikinci kenarini giriniz!'))

// let cevre=kisaKenar*2+uzunKenar*2;
// console.log(cevre);

// //ORNEK 3:Alani bulun

// let alan=kisaKenar*uzunKenar;
// console.log(alan);


//&&  ||

//&& -> false arar -> eger false degerini bulamazsa sondaki true olan datanin degerini dondurur 
 // || -> true arar-> bulamazsa sondaki false olan datanin degerini dondurur 

 console.log(5 && 'merhaba' && '89');
 console.log(45|| 78 || 89);

 console.log(false || 0 || null);

 console.log(0 && false);

 console.log(true && true);
 console.log(true && false && true);
 console.log(4 && 0 && 'hi' && '' && undefined);


 console.log(6 || 7 ||9);
 console.log(0 || 8);



 //ORNEK 3:

 //=
 //==  -> sadece value leri kiyaslar 
 //===  -> data tipini de kiyaslar value ile beraber 

 x=90;
 console.log(4==5);
 console.log(4=='4');

 console.log(4==='4');

 console.log(4!=='4');

 console.log(4=='four');


//ORNEK 4:
//Verilen sayinin birler , onlar ve yuzler basamagindaki sayiyi bulup toplamini yazan js kodunu yaziniz.
//% -> modulus  
let numx=576;
let birlerBas=numx%10;
let onlarBas=Math.floor((numx/10)%10);
let yuzBas=Math.floor(numx/100)

console.log(birlerBas);
console.log(onlarBas);
console.log(birlerBas+onlarBas);
console.log(yuzBas);