
let nutPosition;
let canSelect = true;
const messageElement = document.getElementById('message');

function selectCup(selectedCup) {
    if (!canSelect) return;

    const winningCup = document.getElementById(`cup${nutPosition}`);
    const selectedCupElement = document.getElementById(`cup${selectedCup}`);

    canSelect = false;

    winningCup.classList.add('revealed');
    
    setTimeout(() => {
        if (selectedCup === nutPosition) {
            showMessage("Apsveicu! Jus atradāt riekstu!");
            winningCup.innerHTML = '<img src="rieksts.png" alt="Nut">';
        } else {
            showMessage("Piedodiet, jus neatradāt riekstu!");
            canSelect = true;
        }
    }, 1000);
}

function resetGame() {
    const cups = document.querySelectorAll('.cup');
    cups.forEach(cup => {
        cup.classList.remove('revealed');
        cup.innerHTML = '<img src="kruze.png" alt="Cup">';
    });
    nutPosition = Math.floor(Math.random() * 3) + 1;
    showMessage("");
}

function showMessage(message) {
    messageElement.textContent = message;
}
resetGame();
const cups = document.querySelectorAll('.cup');
cups.forEach(cup => {
    cup.addEventListener('click', () => {
        if (canSelect) {
            resetGame();
        }
    });
});





function updateTime() {
    const time = Date.now();
    const date = new Date(time);
    const currentDate = date.toString();
    document.getElementById("currentDate").innerHTML = "" + currentDate;
  }
  setInterval(updateTime, 1000);
  updateTime();