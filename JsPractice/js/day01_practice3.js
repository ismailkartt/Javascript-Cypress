
function ustAl(){
    const txt1 = document.getElementById("text1").value;
    const txt2 = document.getElementById("text2").value;
    
    const result = document.getElementById("result");
    
    const sonuc = txt1**txt2;

    result.classList.add("ekle");

    result.innerHTML = `${txt1}<sup>${txt2}</sup>=${sonuc}`;
}




