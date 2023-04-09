'use strict';

let correctNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    displayMessage('🛑 No Number!');

    //When Player Wins
  } else if (guess === correctNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = correctNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '40rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== correctNumber) {
    if (score > 1) {
      displayMessage(guess > correctNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🧨 You lost the game');
      document.querySelector('.score').textContent = score = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  correctNumber = Math.trunc(Math.random() * 20) + 1;
});
