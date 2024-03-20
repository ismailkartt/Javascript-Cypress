// Vizenin 30% unu finalinde 70% ini alarak gecme notunu hesaplayan kodu yaziniz.

let mesaj=document.querySelector('.mesaj');

function hesapla(){
    let vize=document.querySelector('#vize').value;
    let final=document.querySelector('#final').value;
    let sonuc=Number(vize*0.3+final*0.7);
    //console.log(sonuc);
    mesaj.classList.remove('dnone');
    let not='';
    switch(true){
        case sonuc<=0:
            not='Negatif olamaz!!';
            break;

        case sonuc<=45 :
            not='FF';
            break;
            
        case sonuc<=55:
            not='DD';
            break;
            
        case sonuc<=65:
            not='DC';
            break;
            
        case sonuc<=75:
            not='CC';
            break;
            
        case sonuc<=90:
            not='BB';
            break;
            
        case sonuc<=100:
            not='AA';
            break;
        default :
            not='Hatali giris yaptiniz!!';    
            
    }

    //mesaj.innerHTML=`Ortalamaniz: ${Number(sonuc).toFixed(2)}, Notunuz: ${not}`;

    if(sonuc>100){
        mesaj.innerHTML=`${not}, Sonuc 100 den buyuk olamaz`;
    }else if(sonuc<0){
        mesaj.innerHTML=`${not}, Sonuc 0 dan kucuk olamaz`;
    }else{
        mesaj.innerHTML=`Ortalamaniz: ${Number(sonuc).toFixed(2)}, Notunuz: ${not}`;
    }



}

function temizle(){
    // mesaj.innerHTML='';
    mesaj.classList.add('dnone');
}