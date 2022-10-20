// Function to get computer Choice:

function getComputerChoice(){
    let posibleChoice = ["Rock", "Paper", "Scissors"]

    let computerChoice = posibleChoice[Math.floor(Math.random()*posibleChoice.length)];
    return computerChoice;
}


// Function to get players Choice:

function capitalizeFirstLetter(string){
    let capitalized = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    return capitalized;
}

// Function to play one round:

function playRound(computerChoice, playerChoice){

    if(computerChoice === playerChoice){
        roundResult = "Tie round";
    }

    if(
        (computerChoice === "Rock" && playerChoice == "Scissors") ||
        (computerChoice === "Scissors" && playerChoice == "Paper") ||
        (computerChoice === "Paper" && playerChoice == "Rock")
    ){
        computerScore ++;
        roundResult = "Computer won round";
    }

    if(
        (playerChoice === "Rock" && computerChoice == "Scissors") ||
        (playerChoice === "Scissors" && computerChoice == "Paper") ||
        (playerChoice === "Paper" && computerChoice == "Rock")
    ){
        playerScore ++;
        roundResult = "Player won round";
    }

    alert(roundResult);
}


// Play five rounds o until 3 rounds won:

let computerScore = 0;
let playerScore = 0;
let roundResult ="";


for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    alert(computerChoice);

    let playerChoice = prompt("choose Rock, Paper or Scissors");
    playerChoice = capitalizeFirstLetter(playerChoice);

    playRound(computerChoice, playerChoice);

    console.log(roundResult);
    console.log(computerScore);
    console.log(playerScore);

    if (playerScore === 3){
        i = 100;
        alert("player won");

    }

    if (computerScore === 3){
        i = 100;
        alert("Computer won");
    }

}

if (playerScore > computerScore){
    alert("player won");

}

if (computerScore > playerScore){
    alert("Computer won");
}

