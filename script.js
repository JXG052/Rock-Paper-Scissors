// ROCK PAPER SCISSORS
// let userInput = prompt("R, P or S: ");
let compInput = getRandom()
document.getElementById("user-score").innerHTML = userInput;
let userCount = 0;
let compCount = 0; 
function getRandom(){
    let result = Math.floor(Math.random()* 3)
    switch (result) {
        case 0:
            return "R";
        case 1:
            return "P";
        case 2:
            return "S";
    }   
}

// if statements 
// 
function whoWins() {
    let player1 = getRandom() 
    let player2 = getRandom()
    let message = "";
    console.log(player1);
    console.log(player2);
    switch (true){
        case player1 == "R" && player2 == "S":
            userCount ++;
            message = "You win!";
            break
        case player1 == "R" && player2 == "P":
            compCount ++;
            message = "You Lose";
            break
        case player1 == "S" && player2 == "R":
            compCount ++;
            message = "You Lose";
            break
        case player1 == "S" && player2 == "P":
            userCount ++;
            message = "You win!";
            break
        case player1 == "P" && player2 == "S":
            compCount ++;
            message = "You Lose";
            break
        case player1 == "P" && player2 == "R":
            userCount ++;
            message =  "You win!";
            break;
        default:
            message = "Draw";
            break;
    }
    console.log(message);

    if (playAgain = "Y") {
        console.log(`You: ${userCount} vs Comp: ${compCount}`)
        whoWins();
    }
    else {
        return `thanks for playiing the final score was\n You: ${userCount} vs Comp: ${compCount}`
    }

}
