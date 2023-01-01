const playerChoice = document.getElementById("playerChoice");
const compChoice = document.getElementById("compChoice");
const winnerIs = document.getElementById("winnerIs");
const choiceBtns = document.querySelectorAll(".choice");
let player;
let comp;
let winner;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn()
}))

function function getRandom(){
    let result = Math.floor(Math.random()* 3)
    switch (result) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }   
}