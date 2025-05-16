let number;

number= 0
document.getElementById("countLabel").textContent= number; 

document.getElementById("myDecrease").onclick=function(){ 
    number--;
    document.getElementById("countLabel").textContent=number;
}

document.getElementById("myIncrease").onclick=function(){
    number++;
    document.getElementById("countLabel").textContent=number;
}

document.getElementById("myReset").onclick=function(){
    number=0;
    document.getElementById("countLabel").textContent=number;
}





