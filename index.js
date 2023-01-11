const playerChoice = document.getElementById("playerChoice");
const compChoice = document.getElementById("compChoice");
const winnerIs = document.getElementById("winnerIs");
const choiceBtns = document.querySelectorAll(".choice");
const userCountEl = document.getElementById("userCount");
const compCountEl = document.getElementById("compCount");
const countDownEl = document.getElementById("countdown")
let player;
let comp;
let winner;
let userCount = 0;
let compCount = 0;

// When user choses an option the game runs



// set a countdown for after the user has clicked a button before seeing what the user shows
choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    playerChoice.textContent = player;
    countdown()


}))
// starts a timer. when finished, it runs the comp choice
function countdown() {
    let timeLeft = 3;
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    let timeInterval = setInterval(function () {
      if (timeLeft === 0) {
        clearInterval(timeInterval)
        displayMessage()
      }
      else {
        compChoice.textContent = timeLeft;
        timeLeft --
      }

    },1000);
  }
// displays after countdown
function displayMessage() {
    comp = getRandom();
    compChoice.textContent = comp;
    winnerIs.textContent = `${whoWins(player,comp)}`;
    userCountEl.textContent = `You have won ${userCount} games`;
    compCountEl.textContent = `Comp has won ${compCount} games`;
}
// create a function that takes an input of rock paper or scissors
// and returns an image representing that 

function getRandom(){
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
function whoWins(player1, player2) {
    let message = "";
    switch (true){
        case player1 == "ROCK" && player2 == "SCISSORS":
            userCount ++;
            message = "Congratulations! You win!";
            winnerIs.style.color = "green";
            break
        case player1 == "ROCK" && player2 == "PAPER":
            compCount ++;
            message = "Unlucky! You Lose";
            winnerIs.style.color = "red";
            break
        case player1 == "SCISSORS" && player2 == "ROCK":
            compCount ++;
            message = "Unlucky! You Lose";
            winnerIs.style.color = "red";
            break
        case player1 == "SCISSORS" && player2 == "PAPER":
            userCount ++;
            message = "Congratulations! You win!";
            winnerIs.style.color = "green";
            break
        case player1 == "PAPER" && player2 == "SCISSORS":
            compCount ++;
            message = "Unlucky! You Lose";
            winnerIs.style.color = "red";
            break
        case player1 == "PAPER" && player2 == "ROCK":
            userCount ++;
            message =  "Congratulations! You win!";
            winnerIs.style.color = "green";
            break;
        default:
            message = "Draw";
            winnerIs.style.color = "black";
            break;  
    }
    return message;
}