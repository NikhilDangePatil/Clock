let hours=document.getElementById("hrs");
let minut=document.getElementById("min");
let second=document.getElementById("sec");

setInterval(()=>{
    let currentTime=new Date();
    console.log(currentTime.getHours());
    
    hours.innerHTML=(currentTime.getHours()<10?"0":"")+currentTime.getHours();
    minut.innerHTML=(currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
    second.innerHTML=(currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();
},1000)


