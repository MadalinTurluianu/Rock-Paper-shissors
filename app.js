// create a way for the computer to pick

function computerPick() {
  let computerChoice;

  let randomNr = Math.random();
  if (randomNr < 0.3333) {
    computerChoice = "ROCK";
  } else if (randomNr < 0.6666) {
    computerChoice = "PAPER";
  } else {
    computerChoice = "SCISSORS";
  }

  console.log(`The computer picked ${computerChoice}`);

  return computerChoice;
}

// create the logic: win draw lose and print it

function whoWins(userChoice, computerChoice) {
  const winner = document.querySelector(".winner");
  let result;

  if (userChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (userChoice === "SCISSORS" && computerChoice === "PAPER") ||
    (userChoice === "PAPER" && computerChoice === "ROCK")
  ) {
    result = "The player won!";
  } else {
    result = "The computer won!";
  }

  let winnerText = `<h2>${result}</h2>`;

  winner.innerHTML = winnerText;
}

// add images

function addImages(userChoice, computerChoice) {
  const userDiv = document.querySelector(".player .image-wrapper");
  const computerDiv = document.querySelector(".computer .image-wrapper");

  userDiv.innerHTML = `
    <img src = "icons/${userChoice}.png" alt = "${userChoice}"/>
    `;

  computerDiv.innerHTML = `
    <img src = "icons/${computerChoice}.png" alt = "${computerChoice}"/>
    `;
}

// create a way for the user to input his choice

function startRound() {
  const rockBtn = document.querySelector(".rock-btn");
  const paperBtn = document.querySelector(".paper-btn");
  const scissorsBtn = document.querySelector(".scissors-btn");

  window.addEventListener("keydown", function (e) {
    if (e.key === "r" || e.key === "R") {
      let userChoice = "ROCK";
      console.log(`The user picked ${userChoice}`);
      let computerChoice = computerPick();
      addImages(userChoice, computerChoice);
      whoWins(userChoice, computerChoice);
    } else if (e.key === "p" || e.key === "P") {
      let userChoice = "PAPER";
      console.log(`The user picked ${userChoice}`);
      let computerChoice = computerPick();
      addImages(userChoice, computerChoice);
      whoWins(userChoice, computerChoice);
    } else if (e.key === "s" || e.key === "S") {
      let userChoice = "SCISSORS";
      console.log(`The user picked ${userChoice}`);
      let computerChoice = computerPick();
      addImages(userChoice, computerChoice);
      whoWins(userChoice, computerChoice);
    }
  });

  rockBtn.addEventListener("click", function () {
    let userChoice = "ROCK";
    console.log(`The user picked ${userChoice}`);
    let computerChoice = computerPick();
    addImages(userChoice, computerChoice);
    whoWins(userChoice, computerChoice);
  });

  paperBtn.addEventListener("click", function () {
    let userChoice = "PAPER";
    console.log(`The user picked ${userChoice}`);
    let computerChoice = computerPick();
    addImages(userChoice, computerChoice);
    whoWins(userChoice, computerChoice);
  });

  scissorsBtn.addEventListener("click", function () {
    let userChoice = "SCISSORS";
    console.log(`The user picked ${userChoice}`);
    let computerChoice = computerPick();
    addImages(userChoice, computerChoice);
    whoWins(userChoice, computerChoice);
  });
}

// create the game

function playGame() {
  const section = document.querySelector("section");
  const instructions = document.querySelectorAll(".choices");

  // remove the play button and add the instructions

  section.removeChild(startBtn);
  instructions.forEach(function(element){
    element.classList.remove("choices");
  })

  startRound();
}

// let the user start the game

const startBtn = document.querySelector(".play");

startBtn.addEventListener("click", playGame);
