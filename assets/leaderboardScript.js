
var startOver = document.getElementById("startOver");
var clear = document.getElementById("clear");

startOver.addEventListener("click",function(){
    location.assign("./index.html");
});

clear.addEventListener("click", function(){
    localStorage.removeItem("highScores");
    location.reload();
});