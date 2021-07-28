document.getElementById("start").addEventListener("click", startTimer);

var startTime;
var endTime;
var origTimePeriod;
var newTimePeriod;

function startTimer(){
    startTime = new Date();
    endTime = getEndTime();

    origTimePeriod = endTime.getTime() - startTime.getTime()

    timer = setInterval(displayCountdown, 1000);
}

function displayCountdown(){
    console.log("HELLO WORLD")
}

function getEndTime(){
    var dt = new Date();

    var hours = parseInt(document.getElementById("hours").value);
    var mins = parseInt(document.getElementById("minutes").value);
    var sec = parseInt(document.getElementById("sec").value);

    dt.setHours(dt.getHours() + hours);
    dt.setMinutes(dt.getMinutes() + mins);
    dt.setSeconds(dt.getSeconds() + sec);
    
    return dt;
}