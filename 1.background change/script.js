function change(){
    document.body.style.backgroundColor=
    'rgb('+Math.round(Math.random()*255)+
    ','+Math.round(Math.random()*255)+','
    +Math.round(Math.random()*255);
    document.getElementById('head').style.color=
    'rgb('+Math.round(Math.random()*205)+
    ','+Math.round(Math.random()*205)+','
    +Math.round(Math.random()*205);
    document.getElementById('change').style.backgroundColor=
    'rgb('+Math.round(Math.random()*200)+
    ','+Math.round(Math.random()*200)+','
    +Math.round(Math.random()*200);
}