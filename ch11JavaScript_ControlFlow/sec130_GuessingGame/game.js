//create secret number
var secretNumber = 4;

//ask user for guess
var guess = Number(prompt("Guess a number"));

//check guess
if (guess === secretNumber){
    alert("thats correct");
}
//otherwise you got it wrong
else if (guess > secretNumber){
    alert("too high");
}
else if (Number(guess) < secretNumber) {
    alert("too low");
}