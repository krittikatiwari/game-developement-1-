// Iteration 5: Store the player score and display it on the game over screen
let score = localStorage.getItem("score");
var scoreBoard= document.getElementById("score-board");
scoreBoard.innerHTML=score;


const playAgain=document.getElementById("play-again-button")
playAgain.onclick=()=>{
    location.href="./index.html";
}
