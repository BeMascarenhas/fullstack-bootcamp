function rollDice() {
var rnd = Math.floor(Math.random() * 6) + 1;
var rnd2 = Math.floor(Math.random() * 6) + 1;
console.log(rnd);
if(rnd === 1) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
} else if(rnd === 2) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
} else if(rnd === 3) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
} else if(rnd === 4) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
} else if(rnd === 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
} else {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}
if(rnd2 === 1) {
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
} else if(rnd2 === 2) {
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
} else if(rnd2 === 3) {
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
} else if(rnd2 === 4) {
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
} else if(rnd2 === 5) {
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
} else {
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}
if(rnd > rnd2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
} else if(rnd < rnd2) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
    document.querySelector("h1").textContent = "Draw!";
}
}

window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        rollDice();
    }
};

// Função que recarrega a página e sinaliza que é um recarregamento intencional
function reloadP() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
}

// Adiciona um evento ao elemento h1 para recarregar a página quando for clicado
document.querySelector("h1").addEventListener("click", reloadP);