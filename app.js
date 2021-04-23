// create a way for the user to input his choice

function validateUserInput(){
    let userInput = prompt("Pick rock, paper or scissors").toUpperCase();
    let userChoice;

    if(userInput === "ROCK" || userInput === "PAPER" || userInput === "SCISSORS"){
        userChoice = userInput;
        console.log(`The user picked ${userChoice}`);
        return userChoice;
    }else{
        return validateUserInput();
    }
}

// create a way for the computer to pick

function computerPick(){
    let computerChoice;

    let randomNr = Math.random();
    if(randomNr < 0.3333){
        computerChoice = "ROCK";
    }else if(randomNr < 0.6666){
        computerChoice = "PAPER";
    }else{
        computerChoice = "SCISSORS";
    }

    console.log(`The computer picked ${computerChoice}`);

    return computerChoice;
}

// create the logic: win draw lose and print it

function whoWins(userChoice, computerChoice){
    if (userChoice === computerChoice){
       console.log("it is a draw");
    }else if(
        userChoice === "ROCK" && computerChoice === "SCISSORS" ||
        userChoice === "SCISSORS" && computerChoice === "PAPER" ||
        userChoice === "PAPER" && computerChoice === "ROCK"
    ){
        console.log("the user won");
    }else{
        console.log("the computer won");
    }
}

// create the game

function game(){
    let userChoice = validateUserInput();
    let computerChoice = computerPick();

    whoWins(userChoice, computerChoice);

    // play again

    console.log("press F5 to play again");
}

game();


