

// ********************* Digital clock **********************

let a = new Date();
console.log(a);

let b = a.getHours();
let c = a.getMinutes();
let d = a.getSeconds();

let sec = d;
let min = c;
let hou = b;

let hour = document.querySelector("#hour");
let minutes = document.querySelector("#min");
let seconds = document.querySelector("#sec");

setInterval(() => {
    sec = sec + 1;
}, 1000);

setInterval(() => {
    if (sec == 60) {
        min = min + 1;
        sec = 0;
        hour.innerHTML = b + " : ";
        minutes.innerHTML = min + " : ";
        seconds.innerHTML = sec;
        // console.log(b + " : " + min + " : " + sec)
    }

    else if (min == 60) {
        hou = hou + 1;
        min = 0;
        sec = 0;
        hour.innerHTML = hou + " : ";
        minutes.innerHTML = min + " : ";
        seconds.innerHTML = sec;
        // console.log(hou + " : " + min + " : " + sec)
    }

    else if (hou == 25) {
        hou = 13;
        min = 0;
        sec = 0;
        hour.innerHTML = hou + " : ";
        minutes.innerHTML = min + " : ";
        seconds.innerHTML = sec;
        // console.log(hou + " : " + min + " : " + sec)
    }

    else {
        hour.innerHTML = b + " : ";
        minutes.innerHTML = min + " : ";
        seconds.innerHTML = sec;
        // console.log(b + " : " + min + " : " + sec)
    }
}, 1000);

// Code By- Datta kale