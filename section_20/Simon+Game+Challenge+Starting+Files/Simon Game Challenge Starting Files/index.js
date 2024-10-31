function random(max){
    return Math.floor(Math.random() * max);
}
var list_of_blocks = ["green", "red", "yellow", "blue"];

$(document).on("keydown",function(event){
    game_init();
});

function game_init(){
    var history = [];
    var rnd = random(4);
    var rnd_color = list_of_blocks[rnd];
    history.push(rnd_color);
    $("." + rnd_color).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + rnd_color + ".mp3");
    audio.play();
    var count;
    $("h1").text("Level " + count);

    $(".btn").on("click", function(){
        var color = $(this).attr("id");
        if(color === history[count]){
            count++;
            if(count === history.length){
                var rnd = random(4);
                var rnd_color = list_of_blocks[rnd];
                history.push(rnd_color);
                $("." + rnd_color).fadeOut(100).fadeIn(100);
                var audio = new Audio("sounds/" + rnd_color + ".mp3");
                audio.play();
                count = 0;
            }
        } else {
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
            }, 200);
            var audio = new Audio("sounds/wrong.mp3");
            audio.play();
            $("h1").text("Game Over, Press Any Key to Restart");
            history = [];
            count = 0;
        }
});
    }
