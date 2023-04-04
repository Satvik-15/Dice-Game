var button = document.querySelector(".btn");
button.addEventListener("click", clicked);  //When button is clicked the function will be called

function clicked(){

button.classList.add("pressed");    //Added "pressed" class

setTimeout(function() {button.classList.remove("pressed")}, 100);   // "pressed" class removed after 100ms 

var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // pseudo random number1 generated
var randomNumber2 = Math.floor(Math.random() * 6) + 1;  // pseudo random number2 generated

document.querySelector(".img1").setAttribute("src","images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src","images/dice" + randomNumber2 + ".png");

// Condition to check who wins!!

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "⬅️ Player 1 Wins!!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Wins!! ➡️";
}
else{
    document.querySelector("h1").textContent = "⬅️ Draw! ➡️";
    }
}
