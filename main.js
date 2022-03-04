"use strict";

const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissor = document.querySelector(".btn-scissors");
const btnAgain = document.querySelector(".again");
const btnRules = document.querySelector(".button");
const btnClose = document.querySelector(".img-close");
const btnEmpty = document.querySelector(".circle-white--dark-2");
const display = document.querySelector(".heading-3--display");
const score = document.querySelector(".heading-1--number");

let seconds = 3;
btnEmpty.textContent = seconds;
let playerScore = 0;

/// GENERATING RONDOM NUMBER
let randomNumber = Math.trunc(Math.random() * 3) + 1;
console.log(randomNumber);

const randomSelector = function () {
  if (randomNumber === 1) {
    document.querySelector("#third-rock").classList.remove("hidden");
    return "Rock";
  } else if (randomNumber === 2) {
    document.querySelector("#third-paper").classList.remove("hidden");
    return "Paper";
  } else if (randomNumber === 3) {
    document.querySelector("#third-scissor").classList.remove("hidden");
    return "Scissor";
  }
};

const displayChange = function () {
  document.querySelector(".main").classList.toggle("hidden");
  document.querySelector(".main-second").classList.toggle("hidden");
  //    document.querySelector('.circle-white--dark-2').classList.add('hidden')
  //    document.querySelector('.circle-white--dark-1').classList.add('hidden')
};
const btnsMission = function (btn) {
  displayChange();
  document.querySelector(`#second-${btn}`).classList.remove("hidden");
  const timer = setInterval(function () {
    seconds--;
    btnEmpty.textContent = seconds;
    if (seconds === 0) clearInterval(timer);
  }, 1000);
  btnEmpty.textContent = 3;
};

///BTN ROCK
btnRock.addEventListener("click", function () {
  btnsMission("rock");

  setTimeout(function () {
    const randomBtn = randomSelector();
    if (randomBtn === "Rock") {
      display.innerText = "Draw";
    } else if (randomBtn === "Paper") {
      display.innerText = "You Lose!";
    } else if (randomBtn === "Scissor") {
      display.innerText = "You Win!";
    }
  }, 3000);
});

//btn paper
btnPaper.addEventListener("click", function () {
  btnsMission("paper");
  setTimeout(function () {
    const btnRandom = randomSelector();
    if (btnRandom === "Rock") {
      display.innerText = "you win!";
    } else if (btnRandom === "Paper") {
      display.innerText = "draw";
    } else if (btnRandom === "Scissor") {
      display.innerText = "You lose!";
    }
  }, 3000);
});

//btn scissors
btnScissor.addEventListener("click", function () {
  btnsMission("scissor");

  setTimeout(function () {
    const btnRandom = randomSelector();
    if (btnRandom === "Rock") {
      display.innerText = "You Lose!";
    } else if (btnRandom === "Paper") {
      display.innerText = "You Win!";
    } else if (btnRandom === "Scissor") {
      display.innerText = "Draw";
    }
  }, 3000);
});

//AGAIN BUTTON
btnAgain.addEventListener("click", function () {
  if (display.innerText === "YOU WIN!") {
    playerScore++;
    score.textContent = playerScore;
  } else if (display.innerText === "YOU LOSE!") {
    playerScore--;
    score.textContent = playerScore;
  }
  displayChange();
  // location.reload()
  randomNumber = Math.trunc(Math.random() * 3) + 1;
  document.querySelector("#third-paper").classList.add("hidden");
  document.querySelector("#third-rock").classList.add("hidden");
  document.querySelector("#third-scissor").classList.add("hidden");
  document.querySelector("#second-paper").classList.add("hidden");
  document.querySelector("#second-rock").classList.add("hidden");
  document.querySelector("#second-scissor").classList.add("hidden");
  display.textContent = "Waiting....";
  seconds = 3;
  display.innerText;

  // if(display.innerText=='You Win'){
  //     console.log(display.innerText)
  //     score.innerText= Number(score.innerText)+1
  // }else if(display.innerText=='You Lose!'){
  //     score.innerText= Number(score.innerText)-1
  // }
});

btnRules.addEventListener("click", function () {
  document.querySelector(".pop-up").classList.toggle("hidden");
});
btnClose.addEventListener("click", function () {
  document.querySelector(".pop-up").classList.add("hidden");
});
