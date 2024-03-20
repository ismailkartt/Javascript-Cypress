

function hesapla(){
    const yas = document.getElementById("yas").value;
    let price = document.getElementById("price").value;
    let mesaj = document.getElementById("mesaj");

    price = (yas >=65) ? (price*0.5) : (price*0.90);

    mesaj.innerHTML = `urunun indirimli fiyati: ${price.toFixed(2)}₺`;
    


}

