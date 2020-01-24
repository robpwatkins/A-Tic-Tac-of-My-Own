const box = document.querySelectorAll('.box');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const box6 = document.querySelector('.box6');
const box7 = document.querySelector('.box7');
const box8 = document.querySelector('.box8');
const box9 = document.querySelector('.box9');
let playerTurn = 'O'

box.forEach(box => box.addEventListener('click', tickyTacky));
document.querySelector('button').addEventListener('click', buttonClicked);

function tickyTacky (event) {
  const whatGotClicked = event.currentTarget;
  if (playerTurn === 'O') {
    playerTurn = 'X';
  } else {
    playerTurn = 'O';
  }
  whatGotClicked.innerHTML = playerTurn;
  whatGotClicked.removeEventListener('click', tickyTacky);
  checkForWin();
  if (checkForWin() && playerTurn === 'X') {
    console.log('X done did it!')
  } else
  if (checkForWin() && playerTurn === 'O') {
    console.log('or O did.')
  }
}

function buttonClicked () {
  playerTurn = 'O';
  document.querySelectorAll('.box').forEach(box => box.innerHTML = '');
}

function checkForWin () {
  if (
    box1.innerHTML === playerTurn && box2.innerHTML === playerTurn && box3.innerHTML === playerTurn
    ||
    box1.innerHTML === playerTurn && box4.innerHTML === playerTurn && box7.innerHTML === playerTurn
    ||
    box1.innerHTML === playerTurn && box5.innerHTML === playerTurn && box9.innerHTML === playerTurn
    ||
    box2.innerHTML === playerTurn && box5.innerHTML === playerTurn && box8.innerHTML === playerTurn
    ||
    box3.innerHTML === playerTurn && box5.innerHTML === playerTurn && box7.innerHTML === playerTurn
    ||
    box4.innerHTML === playerTurn && box5.innerHTML === playerTurn && box6.innerHTML === playerTurn
    ||
    box7.innerHTML === playerTurn && box8.innerHTML === playerTurn && box9.innerHTML === playerTurn
    ||
    box3.innerHTML === playerTurn && box6.innerHTML === playerTurn && box9.innerHTML === playerTurn
    ) {
      return true;
  }
}