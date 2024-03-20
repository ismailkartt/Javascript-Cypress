
let mesaj = document.getElementById("mesaj");

function gonder(){
    let ad = document.getElementById("ad").value;
    let meslek = document.getElementById("meslek").value;

    mesaj.classList.remove("dnone");
    
    if(!ad || !meslek){
        mesaj.innerHTML = "Lutfen formu doldurunuz";
    }else{
        mesaj.innerHTML = `Sayın ${meslek} ${ad}, Hoşgeldiniz`;
    }

    

}

function sil(){
    mesaj.classList.add("dnone"); 
}




