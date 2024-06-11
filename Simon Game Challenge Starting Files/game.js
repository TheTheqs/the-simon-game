var buttonColour = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColour[nextSequence()];
var gamePattern = [];
var gameOn = false;
var userChosenColour;
var userClicekdPattern = [];

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    return randomNumber;
};

function playSound(name){
    var audio = $("#" + name + "_audio")[0];
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 100)
}

$("body").keypress(function(){
    if (!gameOn){
        gameOn = true;
        gamePattern.push(randomChosenColour);
        playSound(randomChosenColour);
        $("#" + randomChosenColour).fadeOut(200).fadeIn(200);
    }
})

$('div[type="button"]').click(function(){
    userChosenColour = $(this).attr('id');
    animatePress($(this).attr('id'));
    userClicekdPattern.push(userChosenColour);
    playSound(userChosenColour);
    console.log(userClicekdPattern);
})

