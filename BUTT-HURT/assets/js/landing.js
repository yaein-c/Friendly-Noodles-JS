// Javascript specific to the landing page etc

function whenButtonClicked() {
    setTimeout(openpopups, 10000);
    setTimeout(rickroll, 12000);
    setTimeout(openwindows, 25000);
}

function openpopups() {
    alert("IT HAS STARTED MWUHAHAHAHA");
    alert("YOUR BUTT IS SORE AINT IT");
    alert("YOU SHOULD NOT HAVE BEEN SITTING FOR THIS LONG");
    alert("YOU SHOULD STAND UP RIGHT NOW");
    alert("STAND UP");
    alert("WE ARE TRYING TO HELP YOU");
    alert("HACKING INTO YOUR COMPUTER");
    alert("YOUR SOCIAL MEDIA IS FILLED WITH INFORMATION");
    alert("MUST SAVE THE BUTT");
    alert("SWEAT HUMAN SWEAT");
    alert("LET THE HACKING BEGIN");
}

function rickroll() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
}

function openwindows() {
    window.open("https://www.google.com");
    window.open("https://www.yahoo.com");
    window.open("https://www.netflix.com");
    window.open("https://www.amazon.com");
    window.open("https://www.apple.com");
    window.open("https://www.nfl.com");
    window.open("https://www.duolingo.com");
    window.open("https://www.instagram.com");
    window.open("https://www.ed.ac.uk");
    window.open("https://youtu.be/L_jWHffIx5E?t=36");
}

const countDownSpan = document.getElementById("seconds");
//put in timer...
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var tenSeconds = 10,
        display = document.querySelector('#time');
    startTimer(tenSeconds, display);
};
