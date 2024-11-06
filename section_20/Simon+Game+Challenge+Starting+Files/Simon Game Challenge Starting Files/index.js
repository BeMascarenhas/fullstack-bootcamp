function random(max){
    return Math.floor(Math.random() * max);
}
// $(".btn").on("click",function(){

//     console.log($(this).attr("id"));
// });
var list_of_blocks = ["green", "red", "yellow", "blue"];
var list_letters = ["g", "r", "y", "b"];    
var game_sequence = [];
var player_sequence = [];
var level = 0;

$(document).on("keydown",function(event){
    if(level === 0 && event.key === "a"){
        game_init();
    }else{
       
            var chosenColor = list_of_blocks[list_letters.indexOf(event.key)];
            player_sequence.push(chosenColor);
            playSound(chosenColor);
            if (chosenColor === game_sequence[player_sequence.length - 1]) {
                // Se o jogador acertou até o momento e completou a sequência
                if (player_sequence.length === game_sequence.length) {
                    player_sequence = [];
                    setTimeout(nextSequence, 1000);  // Gera a próxima cor após um breve intervalo
                }
            } else {
                $("h1").text("Game Over, Press A  Key to Restart");
                var audio = new Audio("sounds/wrong.mp3");
                audio.play();
                $("body").addClass("game-over");
                level = 0;  // Reinicia o nível
            }
    
     
    }
});

function playSound(color) {
    $("." + color).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

function nextSequence() {
    var rnd_color = list_of_blocks[random(4)];
    game_sequence.push(rnd_color);
    playSound(rnd_color);
    $("h1").text("Level " + game_sequence.length);
}
function game_init() {
    game_sequence = [];
    player_sequence = [];
    level = 0;
    nextSequence();
    $("body").removeClass("game-over"); 
}
$(".btn").on("click", function() {
    var chosenColor = $(this).attr("id");
    player_sequence.push(chosenColor);
    playSound(chosenColor);

    if (chosenColor === game_sequence[player_sequence.length - 1]) {
        // Se o jogador acertou até o momento e completou a sequência
        if (player_sequence.length === game_sequence.length) {
            player_sequence = [];
            setTimeout(nextSequence, 1000);  // Gera a próxima cor após um breve intervalo
        }
    } else {
        $("h1").text("Game Over, Press A Key to Restart");
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        level = 0;  // Reinicia o nível
    }
});

    
    