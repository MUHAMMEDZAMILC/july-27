function cal(){
    let bml;
    let result=document.getElementById('result');
    let weight= parseInt(document.getElementById('weight').value);
    // console.log(weight);
    document.getElementById('wtval').textContent=weight+" kg";
    let height= parseInt(document.getElementById('height').value);
    document.getElementById('htval').textContent=height+" cm";
    bml=(weight/Math.pow((height/100),2)).toFixed(1);
    result.textContent=bml;
    if(bml<18.9){
        category="Under weight";
        result.style.color='#0039ff'
    }
    else if(bml>=18.9 && bml<=24.9)
    {
        category="Normal weight";
        result.style.color='#00ff19'
    }
    else if(bml>=25 && bml<=29.9)
    {
        category="Over weight";
        result.style.color='#ffee00'
    }
    else
    {
        category="Obese";
        result.style.color='ff1500';
    }
    document.getElementById('category').textContent=category;
}