const dayse1 = document.getElementById('days');
const hourse1 = document.getElementById('hours');
const minse1 = document.getElementById('mins');
const secondse1 = document.getElementById('seconds');
const newYear = '4 Dec 2021';

function countdown(){

    const newYeardate = new Date(newYear);
    const currentdate = new Date();

    const totalSecond = (newYeardate - currentdate) / 1000;
    
    const seconds = Math.floor(totalSecond) % 60;
    const mins = Math.floor(totalSecond / 60) % 60;
    const hours = Math.floor(totalSecond / 60 )% 24;
    const days = Math.floor(totalSecond / 3600 / 24) ;

    dayse1.innerHTML = days;
    hourse1.innerHTML = timer(hours);
    minse1.innerHTML = timer(mins);
    secondse1.innerHTML = timer(seconds);
}

function timer(time)
{
    return (time < 10) ? (`0${time}`) : time;
}

countdown();

setInterval(countdown,1000);
