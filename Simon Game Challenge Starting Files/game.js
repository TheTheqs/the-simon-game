var buttonCollor = ["red", "blue", "green", "yellow"];
var randomChosenCollor = buttonCollor[nextSequence()];
var gamePattern = [];
var gameOn = false;
var userChosenCollor
var userClicekdPattern = []

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    return randomNumber
};

$("body").keypress(function(){
    if (!gameOn){
        gameOn = true;
        gamePattern.push(randomChosenCollor);
        var audio = $("#" + randomChosenCollor + "_audio")[0];
        audio.play();
        $("#" + randomChosenCollor).fadeOut(200).fadeIn(200);
    }
})

$('div[type="button"]').click(function(){
    userChosenCollor = $(this).attr('id');
    userClicekdPattern.push(userChosenCollor)
    console.log(userClicekdPattern)
})
