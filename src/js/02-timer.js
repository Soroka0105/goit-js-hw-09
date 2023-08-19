import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const options = {
  clickOpens: true,
  enableTime: false,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (date.getTime() >= selectedDates[0].getTime()) {
      Notiflix.Notify.warning('Please choose a date in the future');
      elements.startBtn.disabled = true;
    } else {
      elements.startBtn.disabled = false;
    }
  },
};
const elements = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  timer: document.querySelector('.timer'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

elements.startBtn.disabled = true;
const calendar = flatpickr('#datetime-picker', options);
const date = new Date();
elements.startBtn.addEventListener('click', () => {
  setInterval(() => {
    const currentTime = new Date();
    elements.startBtn.disabled = true;
    calendar.destroy();
    const ms = calendar.selectedDates[0].getTime() - currentTime.getTime();

    elements.seconds.textContent = addLeadingZero(convertMs(ms).seconds);
    elements.minutes.textContent = addLeadingZero(convertMs(ms).minutes);
    elements.hours.textContent = addLeadingZero(convertMs(ms).hours);
    elements.days.textContent = addLeadingZero(convertMs(ms).days);
  }, 1000);
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
