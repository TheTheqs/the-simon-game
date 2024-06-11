var buttonColour = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var gamePattern = [];
var gameOn = false;
var canAct = false;
var userChosenColour;
var userClicekdPattern = [];
var level = 0;
var fail_audio = $("#wrong_audio");
var index = 0;

function nextSequence(){
    userClicekdPattern = [];
    index = 0
    var randomNumber = Math.floor(Math.random()*4);
    randomChosenColour = buttonColour[randomNumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(200).fadeIn(200);
    level ++;
    $("h1").text("Level " + level);
    canAct = true;
};

function playSound(name){
    var audio = $("#" + name + "_audio")[0];
    audio.play();
};

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 100)
};

function checkAnswer(currentLevel){
    if (userClicekdPattern[currentLevel] == gamePattern[currentLevel]){
        console.log(userClicekdPattern[currentLevel] + ", " + gamePattern[currentLevel] + "\nSucess!");
        index ++;
        canAct = true;
        if (currentLevel == (gamePattern.length - 1)){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    } else {
        console.log(userClicekdPattern[currentLevel] + ", " + gamePattern[currentLevel] + "\nFailure :(")
        playSound("wrong");
        alert("Fracassou :(");
        startOver();
    }
};

function startOver(){
    canAct = false;
    level = 0;
    gamePattern = [];
    $("h1").text("Pess A key to Start");
    gameOn = false;
};

$("body").keypress(function(){
    if (!gameOn){
        gameOn = true;
        nextSequence();
    }
})

$('div[type="button"]').click(function(){
    if (canAct){
        canAct = false;
        userChosenColour = $(this).attr('id');
        userClicekdPattern.push(userChosenColour);
        animatePress($(this).attr('id'));    
        playSound(userChosenColour);
        checkAnswer(index)
    }
})

