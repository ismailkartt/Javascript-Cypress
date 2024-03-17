let redDiv=document.querySelector('.red');
let whiteDiv=document.querySelector('.white');
let blueDiv=document.querySelector('.blue');
let blackDiv=document.querySelector('.black');
let greenDiv=document.querySelector('.green');

let yanlisEl=document.querySelector('#yanlis');

redDiv.innerHTML='Kirmizi';
whiteDiv.innerHTML='Beyaz';
blueDiv.innerHTML='Mavi';
blackDiv.innerHTML='Siyah';
greenDiv.innerHTML='Yesil';


let yanlisDiv=`<div class="row">
<div class="red">Siyah</div>
<div class="white">Kirmizi</div>
<div class="blue">Yesil</div>
<div class="black">Mavi</div>
<div class="green">Beyaz</div>
</div>`;

yanlisEl.innerHTML=`<h2 style=color:red> Yanlis renkler </h2> ${yanlisDiv}`