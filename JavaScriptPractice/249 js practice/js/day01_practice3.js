function ustAl(){
    const tabanEl=document.querySelector('#taban').value;
    const ustEl=document.querySelector('#ust').value;

    const sonucEl=document.querySelector('.sonuc');
    const sonuc=tabanEl**ustEl;
    console.log(sonuc);

    sonucEl.classList.add('ekle');
    //sup tagi sayinin uzerinde metin yazdirabilmek icin kullandigimiz bir html tagidir.
    sonucEl.innerHTML=`<b>${tabanEl} <sup>${ustEl}</sup>= ${sonuc}</b>`


}