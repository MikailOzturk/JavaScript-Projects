
var i=0;

function arttir(){
if(i<10){
    var sonuc=document.getElementById("sonuc").innerHTML=++i;
}
    
else{
    alert("10 dan büyük olamaz");
}
   

}

function azalt(){
    if(i>0){
    var sonuc=document.getElementById("sonuc").innerHTML=--i;
    }
    else{
        alert("0 dan küçük olamaz");
    }

}

function reset(){
    i=0;
    var sonuc=document.getElementById("sonuc").innerHTML=0;

}



