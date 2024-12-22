    let currentSec = 0;
    
    function secCounter(){
        setInterval(() => {
            currentSec++
            clockDisplay.innerHTML = currentSec;
        }, 1000);
    }

    secCounter();