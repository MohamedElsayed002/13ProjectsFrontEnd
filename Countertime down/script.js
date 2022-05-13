const newYears = '1 Jan 2023';
const daysIn = document.getElementById("days");
const hoursIn = document.getElementById("hours");
const minutesIn = document.getElementById("minutes");
const secondsIn = document.getElementById("seconds");

function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date;

    const TotalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(TotalSeconds / 3600 / 24);
    const hours = Math.floor(TotalSeconds / 3600) % 24;
    const minutes = Math.floor(TotalSeconds / 60) % 60;
    const second = Math.floor(TotalSeconds % 60);

    daysIn.innerHTML = days;
    hoursIn.innerHTML = format(hours);
    minutesIn.innerHTML = format(minutes);
    secondsIn.innerHTML = format(second);

}

function format(time) {
    return time < 10 ? `0${time}` : time;
}
countDown();
setInterval(countDown, 1000);