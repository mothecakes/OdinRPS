function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3)
    switch(rand) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    } 
    
}
function getUserInput() {
    let userChoice = prompt("would you rock paper or scissors?").toLowerCase();
    switch(userChoice) {
        case "rock":
        case "paper":
        case "scissors":
            return userChoice
        default: 
            return "invalid input"
    }
}

let humanScore = 0
let computerScore = 0

// how do we determine who wins and loses?
// if theyre the same then its a tie
// if theyre different we need to check what is winning and isnt
// pseudocode
// check what choice user made
// if choice is winning return win
// if choice is losing return loss
function playRound(humanChoice, computerChoice) {
    let result;
    switch(humanChoice) {
        case "paper":
            if (computerChoice == "rock") {
                result = "win"
            }
            else if (computerChoice == "scissors") {
                result = "lose"
            }
            else {
                result = "draw"
            }
        case "rock":
            if (computerChoice == "scissors") {
                result = "win"
            }
            else if (computerChoice == "paper") {
                result = "lose"
            }
            else {
                result = "draw"
            }
        case "scissors":
            if (computerChoice == "paper") {
                result = "win"
            }
            else if (computerChoice == "rock") {
                result = "lose"
            }
            else {
                result = "draw"
            }
    }
    tally(result)
    console.log("Player score: " + humanScore)
    console.log("Computer score: " + computerScore)
}
function tally(result) {
    switch (result) {
        case "win":
            humanScore++
            break
        case "lose":
            computerScore++
            break
        default:
            break;
    }
}
function playGame(){
    let round = 0;
    while (round < 5) {
        let humanChoice = getUserInput()
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        round++;
    }
    if (humanScore > computerScore) {
        console.log("You win!")
    }
    else if (humanScore < computerScore) {
        console.log("You lose")
    }
    else {
        console.log("It was a draw!")
    }
}

playGame();