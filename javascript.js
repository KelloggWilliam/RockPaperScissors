console.log("Hello World");

function getComputerChoice(){
    let CompArray = ["rock", "paper", "scissors"];
    CompChoice = Math.floor(Math.random() * 3);
    console.log("CompChoice: " + CompArray[CompChoice])
    
    return CompArray[CompChoice];
}

/*console.log(getComputerChoice())*/

function getPlayerChoice() {
    check = 0;
    let PlayerChoice = prompt("Rock, Paper, or Scissors?");
    PlayerChoice = PlayerChoice.toLowerCase();
    let CompArray = ["rock", "paper", "scissors"];
    while (check < 1){
        if (CompArray.includes(PlayerChoice)){
            console.log("PlayerChoice: " + PlayerChoice);
            check = 1;
        }
        else {
            console.log(PlayerChoice + " is invalid option")
            PlayerChoice = prompt("Rock, Paper, or Scissors?");
            PlayerChoice = PlayerChoice.toLowerCase();
        }

    }  
    return PlayerChoice;
}

function printWin(winner, loser){
    console.log("You Win! " + winner + " beats " + loser);
}

function printLose(loser, winner){
    console.log("You Lose! " + winner + " beats " + loser);
}

function printTie(){
    console.log("There was a tie, you chose the same options");
}

function playRound(CompSelecton, PlayerSelection){
    let result = 0;
    let check = 0;

    while (check < 1){
        if (CompSelecton != PlayerSelection){
            check = 1;
        }
        else {
            CompSelecton = getComputerChoice();
        }
    }

    if ((PlayerSelection === "rock" && CompSelecton === "scissors") || (PlayerSelection === "scissors" && CompSelecton === "paper") ||(PlayerSelection === "paper" && CompSelecton === "rock")){
        printWin(PlayerSelection, CompSelecton);
        result = 1;
    }
    
    else if ((PlayerSelection === "scissors" && CompSelecton === "rock") || (PlayerSelection === "paper" && CompSelecton === "scissors") ||(PlayerSelection === "rock" && CompSelecton === "paper")){
        printLose(PlayerSelection, CompSelecton);
        result = 0;
    }
    
    else {
            console.log("Strange error");
    }
    return result;
}


function playGame(number){
    counter = 0;
    score = 0;

    while (counter < number){
        PlayerSelection = getPlayerChoice();
        CompSelecton = getComputerChoice();
        score = score + playRound(CompSelecton, PlayerSelection);
        counter = counter + 1;
    }

    console.log("You won " + score + " out of " + number + " games");
}

playGame(5);
