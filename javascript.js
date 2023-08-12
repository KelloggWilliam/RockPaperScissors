let playerChoiceGlobal = "";
let compChoiceGlobal = "";

var buttonR = document.getElementById('rock').addEventListener('click', buttonClick);
var buttonP = document.getElementById('paper').addEventListener('click', buttonClick);
var buttonS = document.getElementById('scissors').addEventListener('click', buttonClick);


function getComputerChoice(){
    let CompArray = ["rock", "paper", "scissors"];
    CompChoice = Math.floor(Math.random() * 3);
    console.log("CompChoice: " + CompArray[CompChoice])
    compChoiceGlobal = CompArray[CompChoice];
    //return CompArray[CompChoice];
}

/*console.log(getComputerChoice())*/

function buttonClick(e){
    playerChoiceGlobal = e.target.id;
    //console.log('Button Clicked')
    console.log("in function " + e.target.id + " "+ playerChoiceGlobal);
    //var output = document.getElementById('button');
    //output.innerHTML = '<h3>'+e.target.id+'</h3>';
    getComputerChoice();
    console.log("in function " + e.target.id + " "+ playerChoiceGlobal + "CC: " + compChoiceGlobal);
    playGame(1, compChoiceGlobal, playerChoiceGlobal);


   
}
/*
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

function getPlayerChoice(){
    var buttonR = document.getElementById('buttonR')
    var buttonP = document.getElementById('buttonP').addEventListener('click', buttonClick);
    var buttonS = document.getElementById('buttonS').addEventListener('click', buttonClick);

    let result = buttonR.addEventListener('click', buttonClick);

    console.log("R" + result);

    return result;
}
*/

function printWin(winner, loser){
    console.log("You Win! " + winner + " beats " + loser);
}

function printLose(loser, winner){
    console.log("You Lose! " + winner + " beats " + loser);
}

function printTie(){
    console.log("There was a tie, you chose the same options");
}



function playRound(compSelection, playerSelection){
    let result = 0;
    let check = 0;

    while (check < 1){
        if (compSelection != playerSelection){
            check = 1;
        }
        else {
            printTie();
            getComputerChoice();
            compSelection = compChoiceGlobal;
        }
    }

    if ((playerSelection === "rock" && compSelection === "scissors") || (playerSelection === "scissors" && compSelection === "paper") ||(playerSelection === "paper" && compSelection === "rock")){
        printWin(playerSelection, compSelection);
        result = 1;
    }
    
    else if ((playerSelection === "scissors" && compSelection === "rock") || (playerSelection === "paper" && compSelection === "scissors") ||(playerSelection === "rock" && compSelection === "paper")){
        printLose(playerSelection, compSelection);
        result = 0;
    }
    
    else {
            console.log("Strange error");
    }
    return result;
}


function playGame(number, compSelection, playerSelection){
    counter = 0;
    score = 0;

        //playerSelection = getPlayerChoice();
        //compSelection = getComputerChoice();
    score = score + playRound(compSelection, playerSelection);
    counter = counter + 1;

    console.log("You won " + score + " out of " + number + " games");
}

//playGame(1);
