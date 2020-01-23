document.querySelectorAll('.box').forEach(box => box.addEventListener('click', clicked));
document.querySelector('button').addEventListener('click', buttonClicked);

function clicked (event) {
  event.target.innerHTML = 'X';
}

function buttonClicked () {
  const box = document.querySelectorAll('.box');
  box.style.background = 'white'
}