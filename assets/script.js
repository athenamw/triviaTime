var gameBoard = document.getElementById("gameBoard");
var beginButton = document.getElementById("button")

document.getElementById("button").addEventListener("click", function(){
    gameBoard.style.display = "block";
    beginButton.style.display = "none";
});