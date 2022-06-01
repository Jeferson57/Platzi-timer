const secondSpan = document.querySelector('#seconds');
const minutesSpan = document.querySelector('#minutes');
let secondsValue = 0;
let minutesValue = 0;
let currentChronometer;

const starChronometer = () => {
    currentChronometer = setInterval(() => {
        secondsValue += 1;
        if (secondsValue === 60) {
            secondsValue = 0;
            minutesValue += 1;
            minutesSpan.textContent = formatValue(minutesValue);
        }
        secondSpan.textContent = formatValue(secondsValue);
    }, 1000);
}

const formatValue = (value) => {
    return ('0' + value).slice(-2);

}

const stopChronometer = () => {
    clearInterval(currentChronometer);
}

const resetChronometer = () => {
    secondsValue = 0;
    minutesValue = 0;
    secondSpan.textContent = '00';
    minutesSpan.textContent = '00';
}