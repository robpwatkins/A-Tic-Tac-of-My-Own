const box = document.querySelectorAll('.box');
// box.forEach(box => box.style.background = 'white')
let playerTurn = 'O'
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const box6 = document.querySelector('.box6');
const box7 = document.querySelector('.box7');
const box8 = document.querySelector('.box8');
const box9 = document.querySelector('.box9');

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
  checkForWin();
}

function buttonClicked () {
  document.querySelectorAll('.box').forEach(box => box.innerHTML = '');
}

function checkForWin () {
  if (
    box1.innerHTML && box2.innerHTML && box3.innerHTML === playerTurn
    ||
    box1.innerHTML && box4.innerHTML && box7.innerHTML === playerTurn
    ||
    box1.innerHTML && box5.innerHTML && box9.innerHTML === playerTurn
    ||
    box2.innerHTML && box5.innerHTML && box8.innerHTML === playerTurn
    ||
    box3.innerHTML && box5.innerHTML && box7.innerHTML === playerTurn
    ||
    box4.innerHTML && box5.innerHTML && box6.innerHTML === playerTurn
    ||
    box7.innerHTML && box8.innerHTML && box9.innerHTML === playerTurn
    ||
    box3.innerHTML && box6.innerHTML && box9.innerHTML === playerTurn
    ) {
      console.log('heyoo');
  }
}