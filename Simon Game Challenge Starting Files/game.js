var buttonCollor = ["red", "blue", "green", "yellow"];
var randomChosenCollor = buttonCollor[nextSequence()];
var gamePattern = []

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    return randomNumber
};

gamePattern.push(randomChosenCollor);
console.log(randomChosenCollor);
