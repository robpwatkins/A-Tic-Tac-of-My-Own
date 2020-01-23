document.querySelectorAll('.box').forEach(box => box.addEventListener('click', clicked));

function clicked (event) {
  event.target.innerHTML = 'X';
}