let currentSec = 0;
const secCounter = document.querySelector(".secCounter");
function secCounter() {
  setInterval(() => {
    currentSec++;
    clockDisplay.innerHTML = currentSec;
  }, 1000);
}
secCounter();
