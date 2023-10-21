// ********************* Digital clock **********************
let hour = document.querySelector("#hour");
let minutes = document.querySelector("#min");
let seconds = document.querySelector("#sec");

function updateClock() {
    let addZero = (i) => {
        if (i < 10) {
            return "0" + i;
        }
        return i;
    };

    setInterval(() => {
        let a = new Date();
        let b = a.getHours();
        let c = a.getMinutes();
        let d = a.getSeconds();

        let sec = addZero(d);
        let min = addZero(c);
        let hou = addZero(b);

        sec = parseInt(sec); // to remove any leading zero issues

        sec = sec + 1;

        if (sec === 60) {
            min = parseInt(min); // to remove any leading zero issues
            min = min + 1;
            sec = 0;
        }

        if (min === 60) {
            hou = parseInt(hou); // to remove any leading zero issues
            hou = hou + 1;
            min = 0;
        }

        if (hou === 24) {
            hou = 0;
        }

        hour.innerHTML = hou + " : ";
        minutes.innerHTML = min + " : ";
        seconds.innerHTML = addZero(sec);
    }, 1000);
}

updateClock();
// Code By- Datta kale
