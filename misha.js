
let seconds = {
    second:0,
    minutes:0,
    hours:0
}

function second(){
    setInterval(() => {seconds.second++;
        if(seconds.second == 60){
            seconds.second = 0;
            seconds.minutes++;}
        


    });
}




