
let nutPosition;
let canSelect = true;
const messageElement = document.getElementById('message');
const cups = document.querySelectorAll('.cup');
const resetButton = document.getElementById('rest');

function selectCup(selectedCup) {
    if (!canSelect) return;
    const winningCup = document.querySelector(`.cup:nth-child(${nutPosition})`);
    canSelect = false;
    winningCup.classList.add('revealed');
    setTimeout(() => {
    if (selectedCup === nutPosition) {
        showMessage("Apsveicu! Jus atradāt riekstu!");
        winningCup.querySelector('img').src = "rieksts.png";
    } else {
        showMessage("Piedodiet, jus neatradāt riekstu!");
    }
    canSelect = true;
    }, 1000);
}
function resetGame() {
    cups.forEach(cup => {
    cup.classList.remove('revealed');
    cup.querySelector('img').src = "kruze.png";
    });
    nutPosition = Math.floor(Math.random() * 3) + 1;
    showMessage("");
    canSelect = true;
}
function showMessage(message) {
    messageElement.textContent = message;
}
resetGame();
cups.forEach(cup => {
    cup.addEventListener('click', () => {
    if (canSelect) {
        resetGame();
    }
    });
});
resetButton.addEventListener('click', () => {
    if (canSelect) {
    resetGame();
    }
});





function updateTime() {
    const time = Date.now();
    const date = new Date(time);
    const currentDate = date.toString();
    document.getElementById("currentDate").innerHTML = "" + currentDate;
  }
  setInterval(updateTime, 1000);
  updateTime();