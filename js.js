document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("cancel").addEventListener("click", cancelPressed);

var startTime;
var endTime;
var origTimePeriod;
var newTimePeriod;
var timer;
var cancel = false;

function startTimer(){
    cancel = false;
    startTime = new Date();
    endTime = getEndTime();

    origTimePeriod = endTime.getTime() - startTime.getTime();
    newTimePeriod = origTimePeriod;

    timer = setInterval(displayCountdown, 1000);
}

function displayCountdown(){
    var timeLeft = msToTime(newTimePeriod);

   document.getElementById("clock").innerHTML = `<p>${timeLeft["hours"]}h ${timeLeft["mins"]}m ${timeLeft["sec"]}s </p>`;
   
   var newHeight = Math.floor(newTimePeriod / origTimePeriod * 100) * 3;
   document.getElementById("progressBar").setAttribute("height", newHeight);

   newTimePeriod -= 1000;

   if(newTimePeriod < 0 || cancel ){
       clearInterval(timer)
       document.getElementById("clock").innerHTML = "<p>Complete</p>";
   }
}

function cancelPressed(){
    cancel = true;
 
}

function msToTime(milliseconds){
    var mHour = 1000 * 60 * 60;
    var mMins = 1000 * 60;
    var mSec = 1000;

    var hours  = Math.floor(milliseconds / mHour);
    var mins = Math.floor((milliseconds % mHour) / mMins);
    var sec = Math.floor((milliseconds % mMins) / mSec);

    var time = [];
    time["hours"] = hours;
    time["mins"] = mins;
    time["sec"] = sec;

    return time;
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