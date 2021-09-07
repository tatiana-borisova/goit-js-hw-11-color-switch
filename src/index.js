//variables
const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
const refs = {
  bodyEl: document.querySelector('body'),
  btnStartEl: document.querySelector('[data-action="start"]'),
  btnStopEl: document.querySelector('[data-action="stop"]'),
};
const { bodyEl, btnStartEl, btnStopEl } = refs;
let timerId = null;

//functions
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//event listeners
btnStartEl.addEventListener('click', () => {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
  btnStartEl.disabled = true;
});
btnStopEl.addEventListener('click', () => {
  clearInterval(timerId);
  btnStartEl.disabled = false;
});
