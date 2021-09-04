let timer = null;

function clearTimer() {
    clearTimeout(timer);
    alert('Timer is cleared');
}

function setTimer() {
    const hrs = document.querySelector('#hrs');
    const mins = document.querySelector('#mins');
    const secs = document.querySelector('#secs');

    const totalMillmins = 1000 * (Number(secs.value) + Number(mins.value) * 60 + Number(hrs.value) * 60 * 60);

    timer = setTimeout(() => alert('Time up!'), totalMillmins);
}

function displayDay() {
    const date = new Date();

    const day = date.toString().slice(0, 3);

    document.querySelectorAll('.day').forEach(item => {
        if (item.innerText === day.toUpperCase()) {
            item.classList.toggle('active-day');
        }
    });


}

function displayTime() {
    const timeDiv = document.querySelector('#time');

    setInterval(() => {
        const date = new Date();
        timeDiv.innerText = date.toLocaleTimeString();
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    displayTime();
    displayDay();

    document.querySelector('#clear-btn').addEventListener('click', clearTimer);
    document.querySelector('#set-btn').addEventListener('click', setTimer);
});