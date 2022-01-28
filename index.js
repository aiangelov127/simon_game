var colors = ["red", "green", "blue", "yellow"]

var pattern = [];
var userPattern = [];

var level = 0

var started = false;


$(document).on("keypress", function () {
    if(!started)
    $("#level-title").text("Level " + level);
    addColors();
    started = true;
});



$(".btn").click(function () {
    userColor = $(this).attr("id");
    userPattern.push(userColor);
    playMusic(userColor)
    pressed(userColor)
    checkAnswer(userPattern.length - 1)

});


function addColors() {
    userPattern=[];
    level++;
    $("#level-title").text("Level " + level);
    var number = Math.floor(Math.random() * 4);
    var randomColor = colors[number];
    pattern.push(randomColor);
    $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playMusic(randomColor);
};


function checkAnswer(currentLevel) {
    if (pattern[currentLevel] === userPattern[currentLevel]) {

        console.log("success");

        if (pattern.length === userPattern.length) {
            setTimeout(function () {
                addColors();
            }, 1000);
        };
    } else {
        playMusic("wrong")
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over") 
        }, 200)
        $("h1").text("Game over. Press any key to restart.")
        startOver()
        console.log("false")
    };
};


function startOver(){
    level=0
    pattern=[]
    started=false
}


function playMusic(music) {
    var audio = new Audio("sounds/" + music + ".mp3");
    audio.play()
};

function pressed(button) {
    $("#" + button).toggleClass("pressed");
    setTimeout(function () {
        $("#" + button).toggleClass("pressed")
    }, 200);
};


