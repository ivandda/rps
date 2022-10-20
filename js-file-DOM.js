
    //console.log(button)
// let rockButton = document.querySelector('#rockButton')
// let paperButton = document.querySelector('#paperButton')
// let scissorsButton = document.querySelector('#scissorsButton')


// button[0].addEventListener('click',test)
// button[1].addEventListener('click',test)
// button[2].addEventListener('click',test)

    let button = document.querySelectorAll('button')
    let playerChoice = ""

    let computerChoice = ''

    function getComputerChoice(){
        let possibleChoice = ["Rock", "Paper", "Scissors"]

        let computerChoice = possibleChoice[Math.floor(Math.random()*possibleChoice.length)];
        return computerChoice;
    }

    for(let i=0; i<button.length; i++){
        button[i].addEventListener('click',test)
    }

    function test(e){
        //console.log(e)
        playerChoice = e.target.textContent
        computerChoice = getComputerChoice()
        console.log("Player choice = " + playerChoice)
        console.log("Computer choice = " + computerChoice)

    }









    function playRound(computerChoice, playerChoice){

        if(computerChoice === playerChoice){
            roundResult = "Tie round";
        }

        if(
            (computerChoice === "Rock" && playerChoice === "Scissors") ||
            (computerChoice === "Scissors" && playerChoice === "Paper") ||
            (computerChoice === "Paper" && playerChoice === "Rock")
        ){
            computerScore ++;
            roundResult = "Computer won round";
        }

        if(
            (playerChoice === "Rock" && computerChoice === "Scissors") ||
            (playerChoice === "Scissors" && computerChoice === "Paper") ||
            (playerChoice === "Paper" && computerChoice === "Rock")
        ){
            playerScore ++;
            roundResult = "Player won round";
        }

        alert(roundResult);
    }

    for (let i = 0; i < 5; i++) {

    }

    // Play five rounds o until 3 rounds won:

    // let computerScore = 0;
    // let playerScore = 0;
    // let roundResult ="";
    //
    //
    // for (let i = 0; i < 5; i++) {
    //     let computerChoice = getComputerChoice();
    //     alert(computerChoice);
    //
    //     let playerChoice = prompt("choose Rock, Paper or Scissors");
    //     playerChoice = capitalizeFirstLetter(playerChoice);
    //
    //     playRound(computerChoice, playerChoice);
    //
    //     console.log(roundResult);
    //     console.log(computerScore);
    //     console.log(playerScore);
    //
    //     if (playerScore === 3){
    //         i = 100;
    //         alert("player won");
    //
    //     }
    //
    //     if (computerScore === 3){
    //         i = 100;
    //         alert("Computer won");
    //     }
    //
    // }
    //
    // if (playerScore > computerScore){
    //     alert("player won");
    //
    // }
    //
    // if (computerScore > playerScore){
    //     alert("Computer won");
    // }



