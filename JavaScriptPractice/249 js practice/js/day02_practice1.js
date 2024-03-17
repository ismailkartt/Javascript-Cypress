let message=document.querySelector('#mesaj');
function gonder(){

    let name=document.querySelector('#ad').value;
    let job=document.querySelector('#meslek').value;

    message.classList.remove('dnone');
    //classList -> elementin sahip oldugu classlarin listesini icerir , 
    
    
    if(!name || !job){
        message.innerHTML=`Lutfen formu doldurunuz!`;
    }else{
        message.innerHTML=`Sayin ${job} ${name}, Hosgeldiniz :)`;
    }


}

function sil(){
    //message.classList.remove('mesaj');
    message.classList.add('dnone');
}