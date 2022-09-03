let image = document.getElementById('iMaGes');
let images = ["images/im1.PNG","images/im2.PNG","images/im3.PNG","images/im4.PNG"];
setInterval(function(){
    let rando = Math.floor(Math.random() * 4);
    image.src = images[rando];
},2000);

