var x = 80;
var y = 100;
function submitSelection(){
var a =document.getElementById("gameInput").value;	
document.getElementById("gameOutput").textContent=a;
document.getElementById("game").height=y+"%";
document.getElementById("game").width=x+"%";
if(a!=""){
document.getElementById("game").src =a;
}else{
    document.getElementById("game").height="20%";
    document.getElementById("game").width="20%";
    document.getElementById("game").src = "u suk.png";
}
}

function shrink(){
x=x-20;
y=y-20;
rewriteGame();
submitSelection();
}

function grow(){
y=y+20;
x=x+20;
rewriteGame();
submitSelection();
}

function rewriteGame(){
    document.getElementById("size").textContent= "X: "+ x + "Y: "+y;
    document.getElementById("game").height=y+"%";
document.getElementById("game").width=x+"%";
}