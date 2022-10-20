
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
    let roundResult = ''
    let computerScore = 0
    let playerScore = 0
    let result = 'tie'
    let rounds = 0
    let j = true

    let scoreTextPlayer = document.querySelector('#scoreTextPlayer')
    let scoreTextComputer = document.querySelector('#scoreTextComputer')
    let scoreTextResult = document.querySelector('#scoreTextResult')
    let ComputerChoiceText = document.querySelector('#ComputerChoiceText')
    let scores = document.querySelector('#scores')

    let soundRock = new Audio()

    function getComputerChoice(){
        let possibleChoice = ["Rock", "Paper", "Scissors"]

        computerChoice = possibleChoice[Math.floor(Math.random()*possibleChoice.length)];
        return computerChoice;
    }

    for(let i=0; i<button.length; i++){
        button[i].addEventListener('click',test)
    }




    function playRound(){

        if(result === 'end'){
            return console.log('Game already ended bro...')
        }

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

        rounds++
        // console.log(roundResult);
        // console.log(playerScore);
        // console.log(computerScore);
        // console.log('----------------------------------------------------------------');
    }


    function test(e){
        console.log(e)
        console.log(e.path[0].id)
        playerChoice = e.path[0].id;
        //console.log(playerChoice)
        computerChoice = getComputerChoice()
        // console.log("Player choice = " + playerChoice)
        // console.log("Computer choice = " + computerChoice)

        ComputerChoiceText.textContent = "Computer chose: " + computerChoice
        playRound()
        scoreTextPlayer.textContent = 'Player Score: ' + playerScore + "⠀⠀";
        scoreTextComputer.textContent = 'Computer Score: ' + computerScore;
        scoreTextResult.textContent = roundResult

        if (playerScore === 3){
            result = 'player'
        }

        if (computerScore === 3){
            result = 'computer'
        }

        if (result === 'player' || result === 'computer'){
            scoreTextResult.textContent = result + ' won game!!'
            result = 'end'
            //console.log(result)
            // let resultText = document.createElement('h1')
            // //GIVE AN id TO resultText
            // let resultText2 = document.createTextNode(result + ' won!')
            // resultText.appendChild(resultText2)
            //scores.appendChild(resultText) This is appending multiples elements and don't know why.
            //scoreTextComputer.appendChild(resultText)
            // if(j === true){
            //     scores.appendChild(resultText)
            //     j = false
            // }

        }

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



