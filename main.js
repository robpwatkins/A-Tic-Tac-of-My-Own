const box = document.querySelectorAll('.box');
// box.forEach(box => box.style.background = 'white')

box.forEach(box => box.addEventListener('click', clicked));
document.querySelector('button').addEventListener('click', buttonClicked);

function clicked (event) {
  const whatGotClicked = event.currentTarget;
  whatGotClicked.innerHTML = 'X';
  console.log(whatGotClicked);
}

function buttonClicked () {
  document.querySelectorAll('.box').forEach(box => box.innerHTML = '');
}