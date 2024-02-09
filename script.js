// Get the current date //
const currentDate = new Date();

// Get the month, date, & day of the week //
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayOfWeek = daysOfWeek[currentDate.getDay()];
const month = currentDate.toLocaleString('default', { month: 'long' });
const date = currentDate.getDate();

// Display the current month, date, & day of the week in the HTML element //
const currentDateElement = document.getElementById('currentDate');
currentDateElement.textContent = `${dayOfWeek}, ${month} ${date}`;

// Get the current time //
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12
    hours = hours ? hours : 12

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;


    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("ampm").textContent = ampm;
}

setInterval(updateTime, 1000);

updateTime();