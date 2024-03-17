//Kullanicidan alinin yas ve urun fiyat bilgilerine gore 65 yastan buyuk olanlara %50 indirim, digerlerine %10 indirim uygulayan programi yapiniz.
let mesaj=document.querySelector('#msg');
function hesapla(){
    let yas=document.querySelector('#yas').value;
    let fiyat=document.querySelector('#fiyat').value;

    let indirimliFiyat=0;

    //ternary operation 
    //indirimliFiyat=yas>=65 ? fiyat*0.5 :fiyat*0.9;
    //console.log(indirimliFiyat);

    //&& ile yapilisi
    // yas>=65 && (indirimliFiyat=fiyat*0.5)
    // yas<65 && (indirimliFiyat=fiyat*0.9)

    // || ile mumkun mu?????
    yas>=65 || (indirimliFiyat=fiyat*0.9)
    yas<65 || (indirimliFiyat=fiyat*0.5)

    console.log(indirimliFiyat);

    mesaj.innerHTML=`Indirimli Fiyatiniz: ${indirimliFiyat}`;

}

