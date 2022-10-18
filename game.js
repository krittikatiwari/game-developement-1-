// Iteration 2: Generate 2 random number and display it on the screen
let number1 =Math.floor(Math.random()*100);
const number1box=document.getElementById("number1");
console.log(number1,": number1");
number1box.innerHTML=number1;


let number2 =Math.floor(Math.random()*100);
const number2box=document.getElementById("number2");
console.log(number2,": number2");
number2box.innerHTML=number2;

// Iteration 3: Make the options button functional

const greater= document.getElementById("greater-than");
const equal=document.getElementById("equal-to");
const lesser=document.getElementById("lesser-than");

var score = 0;

greater.onclick=()=>{
    if(number1>number2){
        score++;
        resetTime(timerId)
        console.log(score)
    }
    else{
        location.href="./gameover.html";
    }
    number1 =Math.floor(Math.random()*100);
    number1box.innerHTML=number1;
    number2 =Math.floor(Math.random()*100);
    number2box.innerHTML=number2;
}
equal.onclick=()=>{
    if(number1==number2){
            score++;
            resetTime(timerId)
            console.log(score);
    }
    else{
        location.href="./gameover.html";
    }
    number1 =Math.floor(Math.random()*100);
    number1box.innerHTML=number1;
    number2 =Math.floor(Math.random()*100);
    number2box.innerHTML=number2;

}

lesser.onclick=()=>{
    if(number1<number2){
        score++
        resetTime(timerId)
        console.log(score)
    } 
    else{
        location.href="./gameover.html";
    }
    number1 =Math.floor(Math.random()*100);
    number1box.innerHTML=number1;
    number2 =Math.floor(Math.random()*100);
    number2box.innerHTML=number2;

}   

// Iteration 4: Build a timer for the game
var time = 5;
var timer=document.getElementById("timer");
var timerId;
function startTimer(){
    time=5;
    timer.innerHTML=time;
    timerId=setInterval(()=>{
        time--;
        if(time==0){
            location.href="./gameover.html"
        }
        timer.innerHTML = time;


    },1000)
    localStorage.setItem("score",score)
}
function resetTime(intervalId){
    clearInterval(intervalId);
    startTimer();
}
startTimer();