let sayac=document.querySelector(".sayac")
let gun=document.querySelector("#gun")
let saat=document.querySelector("#saat")
let dakika=document.querySelector("#dakika")
let saniye=document.querySelector("#saniye")
let birthday="10 February 2024";

const geriSayim = () => {
    let newBirthday= new Date(birthday)
  //  console.log(newBirthday)
    let today=new Date()
//    console.log(today)
    
   let totalSeconds=Math.floor( (newBirthday-today)/1000) 
  // console.log(totalSeconds)
   let day=Math.floor(totalSeconds/3600/24)
 //  console.log(day);
   let hour=Math.floor(totalSeconds/3600)%24
 //  console.log(hour);
   let minute=Math.floor(totalSeconds/60)%60
 //  console.log(minute);
   let seconds=Math.floor(totalSeconds%60)
  // console.log(seconds);

   gun.innerHTML=formatTime(day);
   saat.innerHTML=formatTime(hour);
   dakika.innerHTML=formatTime(minute);
   saniye.innerHTML=formatTime(seconds);
}


setInterval(()=>{
    if(sayac.style.background=='rgb(4, 26, 46)'){
        sayac.style.background='rgb(3, 62, 113)';
    }else{
        sayac.style.background='rgb(4, 26, 46)'
    }
    geriSayim();
},1000)

const formatTime = (time) => {
    return time==0? '00' : time<10 ? `0${time}` :time;
}

// setInterval(function(){
//     console.log("hello Js")
// },1000)


