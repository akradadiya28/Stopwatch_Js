let day = document.getElementById("days")
let hr = document.getElementById("hours")
let min = document.getElementById("minutes")
let sec = document.getElementById("seconds")

let d = document.getElementById("da");
let h = document.getElementById("hou")
let m = document.getElementById("mins")
let s = document.getElementById("secos")

let days = 1;
let hours = 0;
let minutes = 0;
let seconds = 0;

const formSubmit = () => {

    let dy = JSON.parse(d.value)
    let ho = JSON.parse(h.value)
    let mi = JSON.parse(m.value)
    let se = JSON.parse(s.value)

    days = dy;
    hours = ho;
    minutes = mi;
    seconds = se;

    day.innerHTML = days;
    hr.innerHTML = hours;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;

    stopWatch();
}

const stopWatch = () => {

    setInterval(() => {
        if (hours <= 0) {
            days--;
            hours = 24;
            if (days < 10) {
                day.innerHTML = "0" + days;
            } else {
                day.innerHTML = days;
            }
        }
        if (minutes <= 0) {
            hours--;
            minutes = 60;
            if (hours < 10) {
                hr.innerHTML = "0" + hours;
            } else {
                hr.innerHTML = hours;
            }
        }
        if (seconds <= 0) {
            minutes--;
            seconds = 60;
            if (minutes < 10) {
                min.innerHTML = "0" + minutes;
            } else {
                min.innerHTML = minutes;
            }
        }
        seconds--;
        if (seconds < 10) {
            sec.innerHTML = "0" + seconds;
        } else {
            sec.innerHTML = seconds;
        }
    }, 1000)
}




