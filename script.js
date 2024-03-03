"use strict";

let score = 20,
  highscore = 0;
let secret = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  } else if (score === 1) {
    document.querySelector(".message").textContent = "YOU LOST THE GAME!!";
    score--;
  } else if (score == 0) {
    document.querySelector(".message").textContent = "YOU LOST THE GAME!!";
  } else if (secret === guess) {
    document.querySelector(".message").textContent = "CORRECT ANSWER";
    document.querySelector("body").style.backgroundColor = "#60b347"; //these are called InLine Styles
    document.querySelector(".number").style.width = "30rem";

    if (score >= document.querySelector(".highscore").textContent) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
    document.querySelector(".number").textContent = secret;
  }

  //when guess is either higher or lower than secret
  else {
    if (guess > secret) {
      document.querySelector(".message").textContent = "GUESS IS TOO HIGH!";
    } else {
      document.querySelector(".message").textContent = "GUESS TOO IS LOW!";
    }
    score--;
  }
  document.querySelector(".score").textContent = score;
});

document.querySelector(".again").addEventListener("click", function () {
  score = document.querySelector(".score").textContent = 20;
  secret = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = " ";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
